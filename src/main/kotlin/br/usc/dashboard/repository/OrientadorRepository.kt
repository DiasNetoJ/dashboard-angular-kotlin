package br.usc.dashboard.repository

import br.usc.dashboard.domain.Orientador
import org.springframework.data.jpa.repository.JpaRepository

interface OrientadorRepository: JpaRepository<Orientador, Long>

