"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard'
    },
    {
        path: 'dashboard',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('modules/dashboard/dashboard-routing.module'); }).then(function (m) { return m.DashboardRoutingModule; });
        }
    },
    {
        path: 'auth',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('modules/auth/auth-routing.module'); }).then(function (m) { return m.AuthRoutingModule; });
        }
    },
    {
        path: 'charts',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('modules/charts/charts-routing.module'); }).then(function (m) { return m.ChartsRoutingModule; });
        }
    },
    {
        path: 'reports',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('modules/reports/reports-routing.module'); }).then(function (m) { return m.ReportsRoutingModule; });
        }
    },
    {
        path: 'error',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('modules/error/error-routing.module'); }).then(function (m) { return m.ErrorRoutingModule; });
        }
    },
    {
        path: 'tables',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('modules/tables/tables-routing.module'); }).then(function (m) { return m.TablesRoutingModule; });
        }
    },
    {
        path: 'version',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('modules/utility/utility-routing.module'); }).then(function (m) { return m.UtilityRoutingModule; });
        }
    },
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('modules/error/error-routing.module'); }).then(function (m) { return m.ErrorRoutingModule; });
        }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
