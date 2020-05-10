(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-file-down-rest', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global['ng-file-down-rest'] = {}, global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgFileDownRestService = /** @class */ (function () {
        function NgFileDownRestService() {
        }
        NgFileDownRestService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgFileDownRestService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgFileDownRestService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NgFileDownRestService_Factory() { return new NgFileDownRestService(); }, token: NgFileDownRestService, providedIn: "root" });
        return NgFileDownRestService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgFileDownRestComponent = /** @class */ (function () {
        function NgFileDownRestComponent(document) {
            this.document = document;
            this.methodType = 'GET';
            this.tagName = 'Download';
            this.response = new core.EventEmitter();
            this.blobUrl = '';
            this.message = { "success": true };
        }
        /**
         * @return {?}
         */
        NgFileDownRestComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        NgFileDownRestComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            if (!this.styleCss) {
                this.anchorElement.nativeElement.style.color = '#6475FF';
            }
            else {
                this.anchorElement.nativeElement.style = this.styleCss;
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        NgFileDownRestComponent.prototype.handleDownload = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this.methodType === "POST") {
                event.preventDefault();
                if (this.urlPath) {
                    this.makeApiCall();
                }
            }
            else {
                this.response.emit(this.message);
            }
        };
        /**
         * @return {?}
         */
        NgFileDownRestComponent.prototype.makeApiCall = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var xhr = new XMLHttpRequest();
            xhr.open('POST', this.urlPath);
            /** @type {?} */
            var headerObject = {};
            if (this.header) {
                headerObject = JSON.parse(this.header);
            }
            if (headerObject) {
                for (var property in headerObject) {
                    xhr.setRequestHeader("" + property, "" + headerObject[property]);
                }
            }
            else {
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.setRequestHeader("cache-control", "no-cache");
            }
            xhr.responseType = 'blob';
            /** @type {?} */
            var that = this;
            xhr.onreadystatechange = (/**
             * @return {?}
             */
            function () {
                if (this.readyState === 4) {
                    /** @type {?} */
                    var contentType = xhr.getResponseHeader("Content-Type") ? xhr.getResponseHeader("Content-Type") : 'text/plain';
                    if (contentType) {
                        /** @type {?} */
                        var blob = new Blob([this.response], { type: contentType });
                        that.makeAmends(blob, that);
                    }
                }
            });
            /** @type {?} */
            var dto = this.params;
            if (dto) {
                xhr.send(dto);
            }
        };
        /**
         * @param {?} blob
         * @param {?} that
         * @return {?}
         */
        NgFileDownRestComponent.prototype.makeAmends = /**
         * @param {?} blob
         * @param {?} that
         * @return {?}
         */
        function (blob, that) {
            that.blobUrl = window.URL.createObjectURL(blob);
            window.open(that.blobUrl);
            this.response.emit(this.message);
        };
        /**
         * @return {?}
         */
        NgFileDownRestComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            window.URL.revokeObjectURL(this.blobUrl);
            this.urlPath = '';
            this.methodType = 'GET';
            this.params = '';
            this.header = {};
            this.tagName = 'Download';
            this.styleCss = '';
            this.blobUrl = '';
            this.message = { "success": true };
        };
        NgFileDownRestComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ng-file-down-rest',
                        template: "<a #ngFileLinkRest href=\"{{urlPath}}\" (click)=\"handleDownload($event)\">{{tagName}}<a></a>"
                    }] }
        ];
        /** @nocollapse */
        NgFileDownRestComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        NgFileDownRestComponent.propDecorators = {
            urlPath: [{ type: core.Input }],
            methodType: [{ type: core.Input }],
            params: [{ type: core.Input }],
            header: [{ type: core.Input }],
            tagName: [{ type: core.Input }],
            styleCss: [{ type: core.Input }],
            response: [{ type: core.Output }],
            anchorElement: [{ type: core.ViewChild, args: ['ngFileLinkRest', { static: false },] }]
        };
        return NgFileDownRestComponent;
    }());
    if (false) {
        /** @type {?} */
        NgFileDownRestComponent.prototype.urlPath;
        /** @type {?} */
        NgFileDownRestComponent.prototype.methodType;
        /** @type {?} */
        NgFileDownRestComponent.prototype.params;
        /** @type {?} */
        NgFileDownRestComponent.prototype.header;
        /** @type {?} */
        NgFileDownRestComponent.prototype.tagName;
        /** @type {?} */
        NgFileDownRestComponent.prototype.styleCss;
        /** @type {?} */
        NgFileDownRestComponent.prototype.response;
        /** @type {?} */
        NgFileDownRestComponent.prototype.anchorElement;
        /** @type {?} */
        NgFileDownRestComponent.prototype.blobUrl;
        /** @type {?} */
        NgFileDownRestComponent.prototype.message;
        /**
         * @type {?}
         * @private
         */
        NgFileDownRestComponent.prototype.document;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgFileDownRestModule = /** @class */ (function () {
        function NgFileDownRestModule() {
        }
        NgFileDownRestModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NgFileDownRestComponent],
                        imports: [],
                        exports: [NgFileDownRestComponent]
                    },] }
        ];
        return NgFileDownRestModule;
    }());

    exports.NgFileDownRestComponent = NgFileDownRestComponent;
    exports.NgFileDownRestModule = NgFileDownRestModule;
    exports.NgFileDownRestService = NgFileDownRestService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-file-down-rest.umd.js.map
