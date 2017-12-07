package br.usc.dashboard.repository

import br.usc.dashboard.domain.Aluno
import org.springframework.data.jpa.repository.JpaRepository

interface AlunoRepository: JpaRepository<Aluno, Long>



