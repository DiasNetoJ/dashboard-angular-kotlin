package br.usc.dashboard.service

import br.usc.dashboard.repository.AlunoRepository
import br.usc.dashboard.vo.Comparativo
import org.springframework.stereotype.Service
import javax.transaction.Transactional

@Service
@Transactional
class AlunoService(val repository: AlunoRepository) {
  fun getComparativo() = Comparativo(repository.findAll())
}
