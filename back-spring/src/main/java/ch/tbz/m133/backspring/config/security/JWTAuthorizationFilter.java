package ch.tbz.m133.backspring.config.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import static java.util.Arrays.stream;
import static org.springframework.http.HttpStatus.FORBIDDEN;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@Log4j2
public class JWTAuthorizationFilter extends OncePerRequestFilter {

    private final JWTProperties jwtProperties;

    public JWTAuthorizationFilter(JWTProperties jwtProperties) {
        this.jwtProperties = jwtProperties;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res,
                                    FilterChain filterChain) throws ServletException, IOException {
        if(req.getServletPath().equals("/login")) {
            filterChain.doFilter(req, res);
        } else {
            String authorizationHeader = req.getHeader(jwtProperties.getHeaderString());
            log.info("Requesting Access Token from Header");
            if (authorizationHeader != null && authorizationHeader.startsWith(jwtProperties.getTokenPrefix())) {
                try {
                    String token = authorizationHeader.substring((jwtProperties.getTokenPrefix() + " ").length());
                    JWTVerifier verifier = JWT.require(Algorithm.HMAC256(jwtProperties.getSecret())).build();
                    DecodedJWT decodedJWT = verifier.verify(token);
                    log.info("Access token has been verified.");
                    String username = decodedJWT.getSubject();
                    String[] roles = decodedJWT.getClaim("roles").asArray(String.class);

                    Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
                    stream(roles).forEach((String role) ->
                        authorities.add(new SimpleGrantedAuthority(role))
                    );

                    UsernamePasswordAuthenticationToken authenticationToken =
                        new UsernamePasswordAuthenticationToken(username, null, authorities);
                    SecurityContextHolder.getContext().setAuthentication(authenticationToken);
                    filterChain.doFilter(req, res);
                } catch (Exception exception) {
                    log.error("Authorization unsuccessful : {}", exception.getMessage());
                    res.setHeader("error", exception.getMessage());
                    res.setStatus(FORBIDDEN.value());
                    Map<String, String> error = new HashMap<>();
                    error.put("error_message", exception.getMessage());
                    res.setContentType(APPLICATION_JSON_VALUE);
                    new ObjectMapper().writeValue(res.getOutputStream(), error);
                }
            } else {
                filterChain.doFilter(req, res);
            }
        }
    }
}

