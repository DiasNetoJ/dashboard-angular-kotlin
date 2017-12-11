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
var totalizadores_service_1 = require("../totalizadores.service");
var TotalizadoresComponent = (function () {
    function TotalizadoresComponent(totalizadoresService) {
        this.totalizadoresService = totalizadoresService;
        this.colors = [
            'darkblue',
            'blue',
            'green',
            'orange'
        ];
    }
    TotalizadoresComponent.prototype.ngOnInit = function () {
        this.getTotalizadores();
    };
    TotalizadoresComponent.prototype.getTotalizadores = function () {
        var _this = this;
        this.totalizadoresService.getTotalizadores().subscribe(function (totalizadores) { return _this.totalizadores = totalizadores; });
    };
    TotalizadoresComponent.prototype.getCor = function (index) {
        while (index > this.colors.length) {
            index -= this.colors.length;
            index = Math.abs(index);
        }
        return this.colors[index];
    };
    return TotalizadoresComponent;
}());
TotalizadoresComponent = __decorate([
    core_1.Component({
        selector: 'app-totalizadores',
        templateUrl: './totalizadores.component.html',
        styleUrls: ['./totalizadores.component.css']
    }),
    __param(0, core_1.Inject(totalizadores_service_1.TotalizadoresService))
], TotalizadoresComponent);
exports.TotalizadoresComponent = TotalizadoresComponent;
