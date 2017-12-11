"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var IndicadorTotalComponent = (function () {
    function IndicadorTotalComponent() {
        this.titulo = "";
        this.cor = "darkblue";
    }
    IndicadorTotalComponent.prototype.ngOnInit = function () {
    };
    IndicadorTotalComponent.prototype.getColor = function () {
        switch (this.cor) {
            case "blue": return '#2196F3';
            case "green": return '#4CAF50';
            case "orange": return '#FFC107';
            default: return '#3F51B5';
        }
    };
    return IndicadorTotalComponent;
}());
__decorate([
    core_1.Input()
], IndicadorTotalComponent.prototype, "titulo", void 0);
__decorate([
    core_1.Input()
], IndicadorTotalComponent.prototype, "cor", void 0);
IndicadorTotalComponent = __decorate([
    core_1.Component({
        selector: 'indicador-total',
        templateUrl: './indicador-total.component.html',
        styleUrls: ['./indicador-total.component.css']
    })
], IndicadorTotalComponent);
exports.IndicadorTotalComponent = IndicadorTotalComponent;
