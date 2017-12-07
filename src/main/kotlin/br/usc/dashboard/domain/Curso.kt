package br.usc.dashboard.domain

import javax.persistence.*

@Entity
@Table(name = "Curso")
class Curso(
  @Id @GeneratedValue(strategy = GenerationType.AUTO)
  val idCurso: Long = 0,
  val nome: String = ""
)
