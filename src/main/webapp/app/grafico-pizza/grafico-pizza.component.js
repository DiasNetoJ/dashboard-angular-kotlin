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
var GraficoPizzaComponent = (function () {
    function GraficoPizzaComponent() {
    }
    GraficoPizzaComponent.prototype.ngOnInit = function () {
    };
    GraficoPizzaComponent.prototype.carregarGrafico = function (dados) {
        console.log('Aquecendo pizza: ' + dados);
        this.chart = new angular_highcharts_1.Chart({
            chart: {
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 0
                },
                type: 'pie',
                height: 200,
                backgroundColor: '#32373a'
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}',
                        color: '#ffffff'
                    },
                    colors: ['#2b908f', '#90ee7e']
                }
            },
            series: [{
                    type: 'pie',
                    name: this.nome,
                    data: dados
                }]
        });
        console.log(this.chart);
    };
    return GraficoPizzaComponent;
}());
__decorate([
    core_1.Input()
], GraficoPizzaComponent.prototype, "nome", void 0);
GraficoPizzaComponent = __decorate([
    core_1.Component({
        selector: 'grafico-pizza',
        templateUrl: './grafico-pizza.component.html',
        styleUrls: ['./grafico-pizza.component.css']
    })
], GraficoPizzaComponent);
exports.GraficoPizzaComponent = GraficoPizzaComponent;
