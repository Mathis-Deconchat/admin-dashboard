"use strict";

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

exports.__esModule = true;
exports.AppRoutingModule = void 0;

var core_1 = require("@angular/core");

var router_1 = require("@angular/router");

var routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/dashboard'
}, {
  path: 'reports',
  loadChildren: function loadChildren() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('modules/reports/reports-routing.module'));
    }).then(function (m) {
      return m.ReportsRoutingModule;
    });
  }
}, {
  path: 'charts',
  loadChildren: function loadChildren() {
    return Promise.resolve().then(function () {
      return require('modules/charts/charts-routing.module');
    }).then(function (m) {
      return m.ChartsRoutingModule;
    });
  }
}, {
  path: 'dashboard',
  loadChildren: function loadChildren() {
    return Promise.resolve().then(function () {
      return require('modules/dashboard/dashboard-routing.module');
    }).then(function (m) {
      return m.DashboardRoutingModule;
    });
  }
}, {
  path: 'auth',
  loadChildren: function loadChildren() {
    return Promise.resolve().then(function () {
      return require('modules/auth/auth-routing.module');
    }).then(function (m) {
      return m.AuthRoutingModule;
    });
  }
}, // {
//     path: 'reports',
//     loadChildren: () =>
//         import('modules/reports/reports-routing.module').then(m => m.ReportsRoutingModule),
// },
{
  path: 'error',
  loadChildren: function loadChildren() {
    return Promise.resolve().then(function () {
      return require('modules/error/error-routing.module');
    }).then(function (m) {
      return m.ErrorRoutingModule;
    });
  }
}, {
  path: 'tables',
  loadChildren: function loadChildren() {
    return Promise.resolve().then(function () {
      return require('modules/tables/tables-routing.module');
    }).then(function (m) {
      return m.TablesRoutingModule;
    });
  }
}, {
  path: 'version',
  loadChildren: function loadChildren() {
    return Promise.resolve().then(function () {
      return require('modules/utility/utility-routing.module');
    }).then(function (m) {
      return m.UtilityRoutingModule;
    });
  }
}, {
  path: '**',
  pathMatch: 'full',
  loadChildren: function loadChildren() {
    return Promise.resolve().then(function () {
      return require('modules/error/error-routing.module');
    }).then(function (m) {
      return m.ErrorRoutingModule;
    });
  }
}];

var AppRoutingModule =
/** @class */
function () {
  function AppRoutingModule() {}

  AppRoutingModule = __decorate([core_1.NgModule({
    imports: [router_1.RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy'
    })],
    exports: [router_1.RouterModule]
  })], AppRoutingModule);
  return AppRoutingModule;
}();

exports.AppRoutingModule = AppRoutingModule;