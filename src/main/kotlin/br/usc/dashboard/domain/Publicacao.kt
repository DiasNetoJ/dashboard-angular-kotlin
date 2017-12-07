package br.usc.dashboard.domain

import javax.persistence.*

@Entity
@Table(name = "Publicacao")
class Publicacao (
  @Id @GeneratedValue(strategy = GenerationType.AUTO)
  val idPublicacao: Long = 0,
  val titulo: String = ""
)
