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
var publicacoes_service_1 = require("../publicacoes.service");
var grafico_colunas_component_1 = require("../grafico-colunas/grafico-colunas.component");
var GraficoPublicacaoAlunosComponent = (function () {
    function GraficoPublicacaoAlunosComponent(publicacoesService) {
        this.publicacoesService = publicacoesService;
        this.dados = new Array();
        this.categorias = new Array();
    }
    GraficoPublicacaoAlunosComponent.prototype.ngOnInit = function () {
        this.getAlunosPublicacoes();
    };
    GraficoPublicacaoAlunosComponent.prototype.getAlunosPublicacoes = function () {
        var _this = this;
        this.publicacoesService.getPublicacoesAlunos().subscribe(function (data) {
            _this.dados.push(data.map(function (it) { return it[0]; }));
            _this.categorias.push(data.map(function (it) { return it[1][0]; }));
            console.log('Dados: ' + _this.dados);
            console.log('Categorias: ' + _this.categorias);
            _this.colunas.carregarGrafico(_this.categorias, _this.dados);
        });
    };
    return GraficoPublicacaoAlunosComponent;
}());
__decorate([
    core_1.ViewChild(grafico_colunas_component_1.GraficoColunasComponent)
], GraficoPublicacaoAlunosComponent.prototype, "colunas", void 0);
GraficoPublicacaoAlunosComponent = __decorate([
    core_1.Component({
        selector: 'grafico-publicacao-alunos',
        templateUrl: './grafico-publicacao-alunos.component.html',
        styleUrls: ['./grafico-publicacao-alunos.component.css']
    }),
    __param(0, core_1.Inject(publicacoes_service_1.PublicacoesService))
], GraficoPublicacaoAlunosComponent);
exports.GraficoPublicacaoAlunosComponent = GraficoPublicacaoAlunosComponent;
