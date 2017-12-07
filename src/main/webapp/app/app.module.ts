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


@NgModule({
  declarations: [
    AppComponent,
    IndicadorTotalComponent,
    GraficoColunasComponent,
    GraficoPizzaComponent,
    TotalizadoresComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [TotalizadoresService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
