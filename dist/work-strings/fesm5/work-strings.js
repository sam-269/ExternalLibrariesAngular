import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

var WorkStringsService = /** @class */ (function () {
    function WorkStringsService() {
    }
    WorkStringsService.ɵfac = function WorkStringsService_Factory(t) { return new (t || WorkStringsService)(); };
    WorkStringsService.ɵprov = ɵɵdefineInjectable({ token: WorkStringsService, factory: WorkStringsService.ɵfac, providedIn: 'root' });
    return WorkStringsService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(WorkStringsService, [{
        type: Injectable,
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
    WorkStringsComponent.ɵcmp = ɵɵdefineComponent({ type: WorkStringsComponent, selectors: [["sg-work-strings"]], decls: 2, vars: 0, template: function WorkStringsComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵtext(1, " work-strings works! ");
            ɵɵelementEnd();
        } }, encapsulation: 2 });
    return WorkStringsComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(WorkStringsComponent, [{
        type: Component,
        args: [{
                selector: 'sg-work-strings',
                template: "\n    <p>\n      work-strings works!\n    </p>\n  ",
                styles: []
            }]
    }], function () { return []; }, null); })();

var WorkStringsModule = /** @class */ (function () {
    function WorkStringsModule() {
    }
    WorkStringsModule.ɵmod = ɵɵdefineNgModule({ type: WorkStringsModule });
    WorkStringsModule.ɵinj = ɵɵdefineInjector({ factory: function WorkStringsModule_Factory(t) { return new (t || WorkStringsModule)(); }, imports: [[]] });
    return WorkStringsModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(WorkStringsModule, { declarations: [WorkStringsComponent], exports: [WorkStringsComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(WorkStringsModule, [{
        type: NgModule,
        args: [{
                declarations: [WorkStringsComponent],
                imports: [],
                exports: [WorkStringsComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of work-strings
 */

/**
 * Generated bundle index. Do not edit.
 */

export { WorkStringsComponent, WorkStringsModule, WorkStringsService };
//# sourceMappingURL=work-strings.js.map
