package br.usc.dashboard.service

import br.usc.dashboard.repository.OrientadorRepository
import br.usc.dashboard.vo.Comparativo
import org.springframework.stereotype.Service
import javax.transaction.Transactional

@Service
@Transactional
class OrientadorService(val repository: OrientadorRepository) {
  fun getComparativo() = Comparativo(repository.findAll())
}
