package com.groupbuy.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http.csrf(lambda -> lambda.disable() );

        http.authorizeHttpRequests(lambda -> {
            lambda.requestMatchers("/api/health").permitAll();
            lambda.anyRequest().permitAll();
        });
        http.formLogin(lambda -> lambda.disable());
        return http.build();
    }
}
