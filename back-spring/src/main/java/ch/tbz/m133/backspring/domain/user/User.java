package ch.tbz.m133.backspring.domain.user;

import ch.tbz.m133.backspring.config.generic.ExtendedEntity;
import ch.tbz.m133.backspring.domain.picture.Picture;
import ch.tbz.m133.backspring.domain.role.Role;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Entity
@Data
@Table(name = "users")
@NoArgsConstructor
@EqualsAndHashCode(callSuper=true)
public class User extends ExtendedEntity {

  @NotNull
  @Column(name = "username")
  private String username;

  @NotNull
  @Column(name = "password")
  private String password;

  @ManyToMany(fetch = FetchType.EAGER)
  @JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "id_user", referencedColumnName = "id"),
      inverseJoinColumns = @JoinColumn(name = "id_role", referencedColumnName = "id"))
  private Set<Role> roles;

  @OneToMany(mappedBy = "id")
  private Set<Picture> pictures;

}
