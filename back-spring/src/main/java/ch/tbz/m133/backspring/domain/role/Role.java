package ch.tbz.m133.backspring.domain.role;

import ch.tbz.m133.backspring.domain.authority.Authority;
import lombok.Data;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Data
public class Role {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "role_id")
  private Long id;

  @Column(name = "role_name")
  private String name;

  @OneToMany(fetch = FetchType.EAGER)
  @JoinTable(name = "role_authority", joinColumns = @JoinColumn(name = "id_role", referencedColumnName = "role_id"),
      inverseJoinColumns = @JoinColumn(name = "id_authority", referencedColumnName = "authority_id"))
  private Collection<Authority> authorities;
}
