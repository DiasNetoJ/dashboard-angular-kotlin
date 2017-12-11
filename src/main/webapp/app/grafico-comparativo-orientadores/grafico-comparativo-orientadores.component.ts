import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ComparativosService} from "../comparativos.service";
import {GraficoPizzaComponent} from "../grafico-pizza/grafico-pizza.component";

@Component({
  selector: 'grafico-comparativo-orientadores',
  templateUrl: './grafico-comparativo-orientadores.component.html',
  styleUrls: ['./grafico-comparativo-orientadores.component.css']
})
export class GraficoComparativoOrientadoresComponent implements OnInit {

  ativos = 0.0;
  inativos = 0.0;

  @ViewChild(GraficoPizzaComponent)
  private pizza: GraficoPizzaComponent;
  constructor(@Inject(ComparativosService) private comparativoService: ComparativosService) { }

  ngOnInit() {
    this.comparativoService.getOrientadores().subscribe(data => {
      this.ativos = data.ativos;
      this.inativos = data.inativos;
      this.pizza.carregarGrafico(this.getDados());
    })
  }

  getDados(): any[] {
    return [['Ativos', this.ativos], ['Inativos', this.inativos]];
  }

}
