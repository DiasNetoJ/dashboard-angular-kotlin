package br.usc.dashboard.repository

import br.usc.dashboard.domain.Curso
import org.springframework.data.jpa.repository.JpaRepository

interface CursoRepository : JpaRepository<Curso, Long>
