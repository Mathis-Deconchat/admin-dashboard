"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.layouts = void 0;
var layout_auth_component_1 = require("./layout-auth/layout-auth.component");
var layout_dashboard_component_1 = require("./layout-dashboard/layout-dashboard.component");
var layout_error_component_1 = require("./layout-error/layout-error.component");
exports.layouts = [layout_dashboard_component_1.LayoutDashboardComponent, layout_auth_component_1.LayoutAuthComponent, layout_error_component_1.LayoutErrorComponent];
__exportStar(require("./layout-dashboard/layout-dashboard.component"), exports);
__exportStar(require("./layout-auth/layout-auth.component"), exports);
__exportStar(require("./layout-error/layout-error.component"), exports);
