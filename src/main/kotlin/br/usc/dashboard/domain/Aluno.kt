package br.usc.dashboard.domain

import br.usc.dashboard.vo.Ativavel
import javax.persistence.*

@Entity
@Table(name = "Aluno")
class Aluno(
  @Id @GeneratedValue(strategy = GenerationType.AUTO)
  var idAluno: Long = 0,
  var matricula: String = "",
  var nome: String = "",
  override var ativo: String = "S",
  @OneToMany
  @JoinTable(name = "PublicacaoAluno", joinColumns = arrayOf(JoinColumn(name = "idAluno")), inverseJoinColumns = arrayOf(JoinColumn(name = "idPublicacao")))
  val publicacoes: List<Publicacao> = emptyList()
) : Ativavel

