package ch.tbz.m133.backspring.config.exceptions;

public class UserExistsException extends RuntimeException{
    public UserExistsException() {
        super("A user with this Username already exists.");
    }
}
