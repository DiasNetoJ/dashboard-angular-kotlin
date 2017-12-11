"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var angular_highcharts_1 = require("angular-highcharts");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var indicador_total_component_1 = require("./indicador-total/indicador-total.component");
var grafico_colunas_component_1 = require("./grafico-colunas/grafico-colunas.component");
var grafico_pizza_component_1 = require("./grafico-pizza/grafico-pizza.component");
var totalizadores_component_1 = require("./totalizadores/totalizadores.component");
var totalizadores_service_1 = require("./totalizadores.service");
var http_1 = require("@angular/http");
var grafico_comparativo_alunos_component_1 = require("./grafico-comparativo-alunos/grafico-comparativo-alunos.component");
var comparativos_service_1 = require("./comparativos.service");
var grafico_comparativo_orientadores_component_1 = require("./grafico-comparativo-orientadores/grafico-comparativo-orientadores.component");
var grafico_publicacao_alunos_component_1 = require("./grafico-publicacao-alunos/grafico-publicacao-alunos.component");
var publicacoes_service_1 = require("./publicacoes.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            indicador_total_component_1.IndicadorTotalComponent,
            grafico_colunas_component_1.GraficoColunasComponent,
            grafico_pizza_component_1.GraficoPizzaComponent,
            totalizadores_component_1.TotalizadoresComponent,
            grafico_comparativo_alunos_component_1.GraficoComparativoAlunosComponent,
            grafico_comparativo_orientadores_component_1.GraficoComparativoOrientadoresComponent,
            grafico_publicacao_alunos_component_1.GraficoPublicacaoAlunosComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            angular_highcharts_1.ChartModule,
            http_1.HttpModule,
            ng_bootstrap_1.NgbModule.forRoot()
        ],
        providers: [totalizadores_service_1.TotalizadoresService, comparativos_service_1.ComparativosService, publicacoes_service_1.PublicacoesService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
