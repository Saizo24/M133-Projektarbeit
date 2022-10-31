package ch.tbz.m133.backspring.config.generic;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import org.hibernate.annotations.Generated;
import org.hibernate.annotations.GenerationTime;
import org.hibernate.annotations.GenericGenerator;

@MappedSuperclass
public class ExtendedEntity {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid2")
    @Generated(GenerationTime.ALWAYS)
    @Column(name = "id")
    private String id;

    protected ExtendedEntity() {
    }

    protected ExtendedEntity(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public ExtendedEntity setId(String id) {
        this.id = id;
        return this;
    }

}