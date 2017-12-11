"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var comparativos_service_1 = require("../comparativos.service");
var grafico_pizza_component_1 = require("../grafico-pizza/grafico-pizza.component");
var GraficoComparativoAlunosComponent = (function () {
    function GraficoComparativoAlunosComponent(comparativosService) {
        this.comparativosService = comparativosService;
        this.ativos = 0.0;
        this.inativos = 0.0;
    }
    GraficoComparativoAlunosComponent.prototype.ngOnInit = function () {
        this.getAlunos();
    };
    GraficoComparativoAlunosComponent.prototype.getAlunos = function () {
        var _this = this;
        this.comparativosService.getAlunos().subscribe(function (data) {
            _this.ativos = data.ativos;
            _this.inativos = data.inativos;
            _this.pizza.carregarGrafico(_this.getDados());
        });
    };
    GraficoComparativoAlunosComponent.prototype.getDados = function () {
        return [['Ativos', this.ativos], ['Inativos', this.inativos]];
    };
    return GraficoComparativoAlunosComponent;
}());
__decorate([
    core_1.ViewChild(grafico_pizza_component_1.GraficoPizzaComponent)
], GraficoComparativoAlunosComponent.prototype, "pizza", void 0);
GraficoComparativoAlunosComponent = __decorate([
    core_1.Component({
        selector: 'grafico-comparativo-alunos',
        templateUrl: './grafico-comparativo-alunos.component.html',
        styleUrls: ['./grafico-comparativo-alunos.component.css']
    }),
    __param(0, core_1.Inject(comparativos_service_1.ComparativosService))
], GraficoComparativoAlunosComponent);
exports.GraficoComparativoAlunosComponent = GraficoComparativoAlunosComponent;
