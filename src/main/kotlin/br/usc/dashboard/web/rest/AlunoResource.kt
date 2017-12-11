package br.usc.dashboard.web.rest

import br.usc.dashboard.repository.AlunoRepository
import br.usc.dashboard.service.AlunoService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class AlunoResource(val repository: AlunoRepository, val service: AlunoService) {
  @GetMapping("/alunos")
  fun findAll() = repository.findAll()
  @GetMapping("/alunos/comparativo")
  fun getComparativo() = service.getComparativo()
  @GetMapping("/alunos/publicacoes")
  fun getPublicacoes() = repository.findAll()
    .groupBy({ it.nome }, { it.publicacoes.count() })
    .map { mapOf("nome" to it.key, "total" to it.value[0] ) }
  @GetMapping("/alunos/count")
  fun getCount() = repository.count()
}
