package br.usc.dashboard.web.rest

import br.usc.dashboard.repository.PublicacaoRepository
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class PublicacaoResource(val repository: PublicacaoRepository) {
  @GetMapping("/publicacoes")
  fun findAll() = repository.findAll()
  @GetMapping("/publicacoes/count")
  fun getCount() = repository.count()
}
