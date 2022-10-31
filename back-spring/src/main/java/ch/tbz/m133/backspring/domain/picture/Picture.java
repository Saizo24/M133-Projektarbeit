package ch.tbz.m133.backspring.domain.picture;

import ch.tbz.m133.backspring.config.generic.ExtendedEntity;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
@Data
public class Picture extends ExtendedEntity {

    @Column(name = "base_url")
    private String baseURL;

    @Column(name = "title")
    private String title;

}
