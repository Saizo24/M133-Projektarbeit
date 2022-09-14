package ch.tbz.m133.backspring.domain.role;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Role {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "role_id")
  private Long id;

  @Column(name = "role_name")
  private String name;
}
