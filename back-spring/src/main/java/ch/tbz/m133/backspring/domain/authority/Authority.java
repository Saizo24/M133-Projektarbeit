package ch.tbz.m133.backspring.domain.authority;

import ch.tbz.m133.backspring.config.generic.ExtendedEntity;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Data
public class Authority extends ExtendedEntity {

  @Column(name = "authority_name")
  private String name;
}
