package br.usc.dashboard.web.rest

import br.usc.dashboard.repository.AlunoRepository
import br.usc.dashboard.repository.CursoRepository
import br.usc.dashboard.repository.OrientadorRepository
import br.usc.dashboard.repository.PublicacaoRepository
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class TotalizadorResource(
  val alunoRepository: AlunoRepository,
  val cursoRepository: CursoRepository,
  val orientadorRepository: OrientadorRepository,
  val publicacaoRepository: PublicacaoRepository
) {
  @GetMapping("/totalizadores")
  fun getTotalizadores() = listOf(
    mapOf("desc" to "Total de alunos", "total" to alunoRepository.count()),
    mapOf("desc" to "Total de orientadores", "total" to orientadorRepository.count()),
    mapOf("desc" to "Total de publicações", "total" to publicacaoRepository.count()),
    mapOf("desc" to "Total de cursos", "total" to cursoRepository.count())
  )
}


