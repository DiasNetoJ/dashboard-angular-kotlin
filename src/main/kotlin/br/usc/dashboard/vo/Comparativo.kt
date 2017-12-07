package br.usc.dashboard.vo

class Comparativo(registros: List<Ativavel>) {
  val ativos: Double
  val inativos: Double
  init {
    val agrupamento = registros.groupBy { it.ativo }
    val ativos = agrupamento.get("S")?.size ?: 0
    val inativos = agrupamento.get("N")?.size ?: 0
    this.ativos = ((ativos * 100).toDouble() / registros.size.toDouble())
    this.inativos = ((inativos * 100).toDouble() / registros.size.toDouble())
  }
}

interface Ativavel {
  val ativo: String
}
