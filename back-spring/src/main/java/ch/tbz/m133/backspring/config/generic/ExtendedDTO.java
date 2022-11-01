package ch.tbz.m133.backspring.config.generic;

import java.util.UUID;

public abstract class ExtendedDTO {

    private UUID id;

    protected ExtendedDTO() {
    }

    protected ExtendedDTO(UUID id) {
        this.id = id;
    }

    public UUID getId() {
        return id;
    }

    public ExtendedDTO setId(UUID id) {
        this.id = id;
        return this;
    }
}