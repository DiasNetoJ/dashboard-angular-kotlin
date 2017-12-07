package br.usc.dashboard.domain

import br.usc.dashboard.vo.Ativavel
import javax.persistence.*

@Entity
@Table(name = "Orientador")
class Orientador(
  @Id @GeneratedValue(strategy = GenerationType.AUTO)
  var idOrientador: Long = 0,
  var nome: String = "",
  override val ativo: String = "S",
  @OneToMany
  @JoinTable(name = "PublicacaoOrientador", joinColumns = arrayOf(JoinColumn(name = "idOrientador")), inverseJoinColumns = arrayOf(JoinColumn(name = "idPublicacao")))
  val publicacoes: List<Publicacao> = emptyList()
) : Ativavel
