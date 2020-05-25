import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, Inject, Input, Output, ViewChild, NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgFileDownRestService = /** @class */ (function () {
    function NgFileDownRestService() {
    }
    NgFileDownRestService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgFileDownRestService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgFileDownRestService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgFileDownRestService_Factory() { return new NgFileDownRestService(); }, token: NgFileDownRestService, providedIn: "root" });
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
        this.fileName = 'myFile';
        this.tagName = 'Download';
        this.response = new EventEmitter();
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
        /** @type {?} */
        var elm = document.createElement('a');
        elm.href = that.blobUrl;
        elm.download = this.fileName;
        document.body.append(elm);
        elm.click();
        elm.remove();
        window.URL.revokeObjectURL(that.blobUrl);
        this.response.emit(this.message);
    };
    /**
     * @return {?}
     */
    NgFileDownRestComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.urlPath = '';
        this.methodType = 'GET';
        this.params = '';
        this.header = {};
        this.fileName = 'myFile';
        this.tagName = 'Download';
        this.styleCss = '';
        this.blobUrl = '';
        this.message = { "success": true };
    };
    NgFileDownRestComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-file-down-rest',
                    template: "<a #ngFileLinkRest href=\"{{urlPath}}\" (click)=\"handleDownload($event)\">{{tagName}}<a></a>"
                }] }
    ];
    /** @nocollapse */
    NgFileDownRestComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    NgFileDownRestComponent.propDecorators = {
        urlPath: [{ type: Input }],
        methodType: [{ type: Input }],
        fileName: [{ type: Input }],
        params: [{ type: Input }],
        header: [{ type: Input }],
        tagName: [{ type: Input }],
        styleCss: [{ type: Input }],
        response: [{ type: Output }],
        anchorElement: [{ type: ViewChild, args: ['ngFileLinkRest', { static: false },] }]
    };
    return NgFileDownRestComponent;
}());
if (false) {
    /** @type {?} */
    NgFileDownRestComponent.prototype.urlPath;
    /** @type {?} */
    NgFileDownRestComponent.prototype.methodType;
    /** @type {?} */
    NgFileDownRestComponent.prototype.fileName;
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
        { type: NgModule, args: [{
                    declarations: [NgFileDownRestComponent],
                    imports: [],
                    exports: [NgFileDownRestComponent]
                },] }
    ];
    return NgFileDownRestModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgFileDownRestComponent, NgFileDownRestModule, NgFileDownRestService };
//# sourceMappingURL=ng-file-down-rest.js.map
