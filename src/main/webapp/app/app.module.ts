import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartModule } from 'angular-highcharts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { IndicadorTotalComponent } from './indicador-total/indicador-total.component';
import { GraficoColunasComponent } from './grafico-colunas/grafico-colunas.component';
import { GraficoPizzaComponent } from './grafico-pizza/grafico-pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    IndicadorTotalComponent,
    GraficoColunasComponent,
    GraficoPizzaComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
