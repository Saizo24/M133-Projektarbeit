package ch.tbz.m133.backspring.domain.authority;

import ch.tbz.m133.backspring.config.generic.ExtendedEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@Entity
@Data
@EqualsAndHashCode(callSuper=true)
public class Authority extends ExtendedEntity {

  @Column(name = "authority_name")
  private String name;
}
