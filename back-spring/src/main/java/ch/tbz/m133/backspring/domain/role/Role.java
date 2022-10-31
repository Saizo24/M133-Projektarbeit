package ch.tbz.m133.backspring.domain.role;

import ch.tbz.m133.backspring.config.generic.ExtendedEntity;
import ch.tbz.m133.backspring.domain.authority.Authority;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Data
@EqualsAndHashCode(callSuper=true)
public class Role extends ExtendedEntity {

  @Column(name = "role_name")
  private String name;

  @ManyToMany(fetch = FetchType.EAGER)
  @JoinTable(name = "role_authority", joinColumns = @JoinColumn(name = "id_role", referencedColumnName = "id"),
      inverseJoinColumns = @JoinColumn(name = "id_authority", referencedColumnName = "id"))
  private Collection<Authority> authorities;

}
