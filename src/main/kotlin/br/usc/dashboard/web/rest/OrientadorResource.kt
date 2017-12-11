package br.usc.dashboard.web.rest

import br.usc.dashboard.repository.OrientadorRepository
import br.usc.dashboard.service.OrientadorService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class OrientadorResource(val repository: OrientadorRepository, val service: OrientadorService) {
  @GetMapping("/orientadores")
  fun findAll() = repository.findAll()
  @GetMapping("/orientadores/comparativo")
  fun getComparativo() = service.getComparativo()
  @GetMapping("/orientadores/publicacoes")
  fun getPublicacoes() = repository.findAll()
    .groupBy({ it.nome }, { it.publicacoes.count() })
    .map { mapOf("nome" to it.key, "total" to it.value[0] ) }
  @GetMapping("/orientadores/count")
  fun getCount() = repository.count()
}
