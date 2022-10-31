package ch.tbz.m133.backspring.config.security;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@Data
@ConfigurationProperties("jwt")
public class JWTProperties {
    private long expirationTime;
    private String secret;
    private String headerString;
    private String tokenPrefix;
}
