import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {PublicacoesService} from "../publicacoes.service";
import {GraficoColunasComponent} from '../grafico-colunas/grafico-colunas.component';

@Component({
  selector: 'grafico-publicacao-alunos',
  templateUrl: './grafico-publicacao-alunos.component.html',
  styleUrls: ['./grafico-publicacao-alunos.component.css']
})
export class GraficoPublicacaoAlunosComponent implements OnInit {

  dados: any[] = new Array();
  categorias: string[] = new Array();
  @ViewChild(GraficoColunasComponent)
  private colunas: GraficoColunasComponent;

  constructor(@Inject(PublicacoesService) private publicacoesService: PublicacoesService) { }

  ngOnInit() {
    this.getAlunosPublicacoes();
  }

  getAlunosPublicacoes() {
    this.publicacoesService.getPublicacoesAlunos().subscribe(data => {
      console.log(data);
      this.categorias = data.map(it => it.nome);
      this.dados = data.map(it => it.total);
      this.colunas.carregarGrafico(this.categorias, this.dados);
    })
  }
}
