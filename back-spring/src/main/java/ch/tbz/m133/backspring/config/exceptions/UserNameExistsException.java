package ch.tbz.m133.backspring.config.exceptions;

public class UserNameExistsException extends RuntimeException{
    public UserNameExistsException() {
        super("A user with this Username already exists.");
    }
}
