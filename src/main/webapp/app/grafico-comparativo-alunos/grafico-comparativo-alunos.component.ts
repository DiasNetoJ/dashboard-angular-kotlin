import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ComparativosService} from '../comparativos.service';
import {GraficoPizzaComponent} from '../grafico-pizza/grafico-pizza.component';

@Component({
  selector: 'grafico-comparativo-alunos',
  templateUrl: './grafico-comparativo-alunos.component.html',
  styleUrls: ['./grafico-comparativo-alunos.component.css']
})
export class GraficoComparativoAlunosComponent implements OnInit {

  @ViewChild(GraficoPizzaComponent)
  private pizza: GraficoPizzaComponent;


  constructor(@Inject(ComparativosService) private comparativosService: ComparativosService) {
  }

  ativos = 0.0;
  inativos = 0.0;
  ngOnInit() {
    this.getAlunos();
  }

  getAlunos() {
    this.comparativosService.getAlunos().subscribe(data => {
      this.ativos = data.ativos;
      this.inativos = data.inativos;
      this.pizza.carregarGrafico(this.getDados());
    });
  }

  getDados() : any[] {
    return [['Ativos', this.ativos],['Inativos', this.inativos]];
  }
}
