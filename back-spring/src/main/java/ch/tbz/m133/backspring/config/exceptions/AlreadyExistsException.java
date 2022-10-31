package ch.tbz.m133.backspring.config.exceptions;

public class AlreadyExistsException extends RuntimeException{
    public AlreadyExistsException(String detail) {
        super("This " + detail + " already exists.");
    }
}
