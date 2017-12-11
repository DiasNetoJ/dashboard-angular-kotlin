import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {PublicacoesService} from '../publicacoes.service';
import {GraficoColunasComponent} from "../grafico-colunas/grafico-colunas.component";

@Component({
  selector: 'grafico-publicacao-orientadores',
  templateUrl: './grafico-publicacao-orientadores.component.html',
  styleUrls: ['./grafico-publicacao-orientadores.component.css']
})
export class GraficoPublicacaoOrientadoresComponent implements OnInit {

  dados: any[] = new Array();
  categorias: string[] = new Array();
  @ViewChild(GraficoColunasComponent)
  private colunas: GraficoColunasComponent;

  constructor(@Inject(PublicacoesService) private publicacoesService: PublicacoesService) { }

  ngOnInit() {
    this.getOrientadoresPublicacoes();
  }

  getOrientadoresPublicacoes() {
    this.publicacoesService.getPublicacoesOrientadores().subscribe(data => {
      this.dados = data.map(it => it.total);
      this.categorias = data.map(it => it.nome);
      this.colunas.carregarGrafico(this.categorias, this.dados);
    })
  }

}
