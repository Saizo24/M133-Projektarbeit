package ch.tbz.m133.backspring.domain.authority;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Authority {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "authority_id")
  private Long id;

  @Column(name = "authority_name")
  private String name;
}
