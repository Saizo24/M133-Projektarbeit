package ch.tbz.m133.backspring.domain.picture;

import ch.tbz.m133.backspring.config.generic.ExtendedEntity;
import ch.tbz.m133.backspring.domain.user.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper=true)
public class Picture extends ExtendedEntity {

    @Column(name = "image_id")
    private String imageId;

    @Column(name = "base_url")
    private String baseURL;

    @Column(name = "title")
    private String title;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnore
    @JoinColumn(name="id_user")
    private User owner;

}
