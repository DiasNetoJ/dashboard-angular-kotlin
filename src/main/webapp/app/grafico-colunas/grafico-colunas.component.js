"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_highcharts_1 = require("angular-highcharts");
var GraficoColunasComponent = (function () {
    function GraficoColunasComponent() {
    }
    GraficoColunasComponent.prototype.ngOnInit = function () {
    };
    GraficoColunasComponent.prototype.carregarGrafico = function (categorias, dados) {
        this.chart = new angular_highcharts_1.Chart({
            chart: {
                type: 'column',
                width: 824,
                height: 250,
                backgroundColor: '#32373a'
            },
            title: {
                text: ''
            },
            plotOptions: {
                column: {
                    color: '#2b908f',
                    depth: 25,
                    borderWidth: 0
                }
            },
            xAxis: {
                categories: categorias,
                labels: {
                    style: {
                        color: '#ffffff'
                    }
                },
                lineColor: '#707073',
                tickColor: '#707073'
            },
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    style: {
                        color: '#ffffff'
                    }
                },
                gridLineColor: '#707073'
            },
            series: [{
                    name: this.nome,
                    data: dados
                }]
        });
    };
    return GraficoColunasComponent;
}());
__decorate([
    core_1.Input()
], GraficoColunasComponent.prototype, "nome", void 0);
GraficoColunasComponent = __decorate([
    core_1.Component({
        selector: 'grafico-colunas',
        templateUrl: './grafico-colunas.component.html',
        styleUrls: ['./grafico-colunas.component.css']
    })
], GraficoColunasComponent);
exports.GraficoColunasComponent = GraficoColunasComponent;
