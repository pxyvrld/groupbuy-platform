package com.groupbuy.backend.error;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class ApiExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Map<String, String>>> handleValidationException(MethodArgumentNotValidException exception) {

        var fieldErrors = exception.getBindingResult().getFieldErrors();
        var errors = new HashMap<String, String>();

        for (FieldError err : fieldErrors) {
            errors.put(err.getField(), err.getDefaultMessage());
        }

        return ResponseEntity.badRequest().body(Map.of("errors", errors));
    }
}
