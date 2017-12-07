package br.usc.dashboard.web.rest

import br.usc.dashboard.repository.CursoRepository
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class CursoResource (val repository: CursoRepository) {
  @GetMapping("/cursos")
  fun findAll() = repository.findAll()
  @GetMapping("/cursos/count")
  fun getCount() = repository.count()
}
