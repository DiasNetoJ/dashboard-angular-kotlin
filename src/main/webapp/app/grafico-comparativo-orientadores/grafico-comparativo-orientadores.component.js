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
var GraficoComparativoOrientadoresComponent = (function () {
    function GraficoComparativoOrientadoresComponent(comparativoService) {
        this.comparativoService = comparativoService;
        this.ativos = 0.0;
        this.inativos = 0.0;
    }
    GraficoComparativoOrientadoresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.comparativoService.getOrientadores().subscribe(function (data) {
            _this.ativos = data.ativos;
            _this.inativos = data.inativos;
            _this.pizza.carregarGrafico(_this.getDados());
        });
    };
    GraficoComparativoOrientadoresComponent.prototype.getDados = function () {
        return [['Ativos', this.ativos], ['Inativos', this.inativos]];
    };
    return GraficoComparativoOrientadoresComponent;
}());
__decorate([
    core_1.ViewChild(grafico_pizza_component_1.GraficoPizzaComponent)
], GraficoComparativoOrientadoresComponent.prototype, "pizza", void 0);
GraficoComparativoOrientadoresComponent = __decorate([
    core_1.Component({
        selector: 'grafico-comparativo-orientadores',
        templateUrl: './grafico-comparativo-orientadores.component.html',
        styleUrls: ['./grafico-comparativo-orientadores.component.css']
    }),
    __param(0, core_1.Inject(comparativos_service_1.ComparativosService))
], GraficoComparativoOrientadoresComponent);
exports.GraficoComparativoOrientadoresComponent = GraficoComparativoOrientadoresComponent;
