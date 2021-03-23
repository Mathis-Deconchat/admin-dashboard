"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ReportsRoutingModule = exports.ROUTES = void 0;
/* tslint:disable: ordered-imports*/
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
/* Module */
var reports_module_1 = require("./reports.module");
/* Containers */
var reportsContainers = require("./containers");
/* Routes */
exports.ROUTES = [
    {
        path: '',
        data: {
            title: 'Dashboard - Reports',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/Dashboard'
                },
                {
                    text: 'Reports',
                    active: true
                },
            ]
        },
        canActivate: [],
        component: reportsContainers.ReportsComponent
    }
];
var ReportsRoutingModule = /** @class */ (function () {
    function ReportsRoutingModule() {
    }
    ReportsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [reports_module_1.ReportsModule, router_1.RouterModule.forChild(exports.ROUTES)],
            exports: [router_1.RouterModule]
        })
    ], ReportsRoutingModule);
    return ReportsRoutingModule;
}());
exports.ReportsRoutingModule = ReportsRoutingModule;
