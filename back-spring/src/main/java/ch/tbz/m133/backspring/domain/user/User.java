package ch.tbz.m133.backspring.domain.user;

import ch.tbz.m133.backspring.domain.role.Role;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Entity
@Data
@Table(name = "users")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "user_id")
  private Long id;

  @NotNull
  @Column(name = "user_name")
  private String name;

  @NotNull
  @Column(name = "user_pw")
  private String password;

  @ManyToMany(fetch = FetchType.EAGER)
  @JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "id_user", referencedColumnName = "user_id"),
      inverseJoinColumns = @JoinColumn(name = "id_role", referencedColumnName = "role_id"))
  private Set<Role> roles;
}
