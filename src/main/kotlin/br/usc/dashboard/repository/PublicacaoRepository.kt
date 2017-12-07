package br.usc.dashboard.repository

import br.usc.dashboard.domain.Publicacao
import org.springframework.data.jpa.repository.JpaRepository

interface PublicacaoRepository : JpaRepository<Publicacao, Long>

