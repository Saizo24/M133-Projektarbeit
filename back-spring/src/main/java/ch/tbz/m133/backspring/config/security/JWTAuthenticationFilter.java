package ch.tbz.m133.backspring.config.security;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import ch.tbz.m133.backspring.domain.user.User;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Log4j2
public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    public static final String USERNAME_PARAMETER_STRING = "username";

    private final AuthenticationManager authenticationManager;
    private final JWTProperties jwtProperties;

    @Autowired
    public JWTAuthenticationFilter(AuthenticationManager authenticationManager, JWTProperties jwtProperties) {
        this.authenticationManager = authenticationManager;
        this.jwtProperties = jwtProperties;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest req, HttpServletResponse res)
        throws AuthenticationException {
        try {
            User credentials = new ObjectMapper().readValue(req.getInputStream(), User.class);
            log.info("User '{}' login attempt", credentials.getName());
            UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(credentials.getName(), credentials.getPassword());
            return authenticationManager.authenticate(authenticationToken);
        }
        catch (IOException e) {
            log.error("cant make a User from the data", e);
            return null;
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest req, HttpServletResponse res, FilterChain chain,
                                            Authentication authResult) throws IOException {
        UserDetails user = (UserDetails) authResult.getPrincipal();
        log.info("User '{}' login successful", user.getUsername());
        Date notBeforeTimestamp = new Date(System.currentTimeMillis());
        Date expirationTimestamp = new Date(System.currentTimeMillis() + jwtProperties.getExpirationTime());

        String accessToken = JWT.create().withSubject(user.getUsername()).withNotBefore(notBeforeTimestamp)
            .withExpiresAt(expirationTimestamp).withIssuer(req.getRequestURL().toString())
            .withClaim("roles", user.getAuthorities().stream().map(GrantedAuthority::getAuthority).toList())
            .sign(Algorithm.HMAC256(jwtProperties.getSecret().getBytes()));
        res.addHeader(jwtProperties.getHeaderString(), jwtProperties.getTokenPrefix() + " " + accessToken);
        res.addHeader("Access-Control-Expose-Headers", jwtProperties.getHeaderString());
        res.addHeader("username", user.getUsername());

        log.info("JWT set in header for user '{}'", user.getUsername());

        Map<String, String> tokens = new HashMap<>();
        tokens.put(jwtProperties.getHeaderString(), accessToken);
        res.setContentType(APPLICATION_JSON_VALUE);
        new ObjectMapper().writeValue(res.getOutputStream(), user);
    }

    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest req, HttpServletResponse res,
                                              AuthenticationException failed) {
        log.info("User '{}' login attempt denied");
        res.setStatus(HttpStatus.UNAUTHORIZED.value());

    }
}
