import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ChartModule} from 'angular-highcharts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {IndicadorTotalComponent} from './indicador-total/indicador-total.component';
import {GraficoColunasComponent} from './grafico-colunas/grafico-colunas.component';
import {GraficoPizzaComponent} from './grafico-pizza/grafico-pizza.component';
import {TotalizadoresComponent} from './totalizadores/totalizadores.component';
import {TotalizadoresService} from "./totalizadores.service";
import {HttpModule} from "@angular/http";
import { GraficoComparativoAlunosComponent } from './grafico-comparativo-alunos/grafico-comparativo-alunos.component';
import { ComparativosService } from "./comparativos.service";
import { GraficoComparativoOrientadoresComponent } from './grafico-comparativo-orientadores/grafico-comparativo-orientadores.component';
import { GraficoPublicacaoAlunosComponent } from './grafico-publicacao-alunos/grafico-publicacao-alunos.component';
import {PublicacoesService} from "./publicacoes.service";
import { GraficoPublicacaoOrientadoresComponent } from './grafico-publicacao-orientadores/grafico-publicacao-orientadores.component';


@NgModule({
  declarations: [
    AppComponent,
    IndicadorTotalComponent,
    GraficoColunasComponent,
    GraficoPizzaComponent,
    TotalizadoresComponent,
    GraficoComparativoAlunosComponent,
    GraficoComparativoOrientadoresComponent,
    GraficoPublicacaoAlunosComponent,
    GraficoPublicacaoOrientadoresComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [TotalizadoresService, ComparativosService, PublicacoesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
