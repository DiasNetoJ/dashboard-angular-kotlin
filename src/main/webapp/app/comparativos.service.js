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
var http_1 = require("@angular/http");
var ComparativosService = (function () {
    function ComparativosService(http) {
        this.http = http;
    }
    ComparativosService.prototype.getAlunos = function () {
        return this.http.get('api/alunos/comparativo').map(function (res) { return res.json(); });
    };
    ComparativosService.prototype.getOrientadores = function () {
        return this.http.get('api/orientadores/comparativo').map(function (res) { return res.json(); });
    };
    return ComparativosService;
}());
ComparativosService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(http_1.Http))
], ComparativosService);
exports.ComparativosService = ComparativosService;
