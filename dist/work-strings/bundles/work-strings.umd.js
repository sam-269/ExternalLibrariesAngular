(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('work-strings', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['work-strings'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var WorkStringsService = /** @class */ (function () {
        function WorkStringsService() {
        }
        WorkStringsService.ɵfac = function WorkStringsService_Factory(t) { return new (t || WorkStringsService)(); };
        WorkStringsService.ɵprov = core.ɵɵdefineInjectable({ token: WorkStringsService, factory: WorkStringsService.ɵfac, providedIn: 'root' });
        return WorkStringsService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(WorkStringsService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var WorkStringsComponent = /** @class */ (function () {
        function WorkStringsComponent() {
        }
        WorkStringsComponent.prototype.ngOnInit = function () {
        };
        WorkStringsComponent.ɵfac = function WorkStringsComponent_Factory(t) { return new (t || WorkStringsComponent)(); };
        WorkStringsComponent.ɵcmp = core.ɵɵdefineComponent({ type: WorkStringsComponent, selectors: [["sg-work-strings"]], decls: 2, vars: 0, template: function WorkStringsComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "p");
                core.ɵɵtext(1, " work-strings works! ");
                core.ɵɵelementEnd();
            } }, encapsulation: 2 });
        return WorkStringsComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(WorkStringsComponent, [{
            type: core.Component,
            args: [{
                    selector: 'sg-work-strings',
                    template: "\n    <p>\n      work-strings works!\n    </p>\n  ",
                    styles: []
                }]
        }], function () { return []; }, null); })();

    var WorkStringsModule = /** @class */ (function () {
        function WorkStringsModule() {
        }
        WorkStringsModule.ɵmod = core.ɵɵdefineNgModule({ type: WorkStringsModule });
        WorkStringsModule.ɵinj = core.ɵɵdefineInjector({ factory: function WorkStringsModule_Factory(t) { return new (t || WorkStringsModule)(); }, imports: [[]] });
        return WorkStringsModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(WorkStringsModule, { declarations: [WorkStringsComponent], exports: [WorkStringsComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(WorkStringsModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [WorkStringsComponent],
                    imports: [],
                    exports: [WorkStringsComponent]
                }]
        }], null, null); })();

    exports.WorkStringsComponent = WorkStringsComponent;
    exports.WorkStringsModule = WorkStringsModule;
    exports.WorkStringsService = WorkStringsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=work-strings.umd.js.map
