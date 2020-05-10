import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, Inject, Input, Output, ViewChild, NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgFileDownRestService {
    constructor() { }
}
NgFileDownRestService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgFileDownRestService.ctorParameters = () => [];
/** @nocollapse */ NgFileDownRestService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgFileDownRestService_Factory() { return new NgFileDownRestService(); }, token: NgFileDownRestService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgFileDownRestComponent {
    /**
     * @param {?} document
     */
    constructor(document) {
        this.document = document;
        this.methodType = 'GET';
        this.tagName = 'Download';
        this.response = new EventEmitter();
        this.blobUrl = '';
        this.message = { "success": true };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.styleCss) {
            this.anchorElement.nativeElement.style.color = '#6475FF';
        }
        else {
            this.anchorElement.nativeElement.style = this.styleCss;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleDownload(event) {
        if (this.methodType === "POST") {
            event.preventDefault();
            if (this.urlPath) {
                this.makeApiCall();
            }
        }
        else {
            this.response.emit(this.message);
        }
    }
    /**
     * @return {?}
     */
    makeApiCall() {
        /** @type {?} */
        let xhr = new XMLHttpRequest();
        xhr.open('POST', this.urlPath);
        /** @type {?} */
        let headerObject = {};
        if (this.header) {
            headerObject = JSON.parse(this.header);
        }
        if (headerObject) {
            for (const property in headerObject) {
                xhr.setRequestHeader(`${property}`, `${headerObject[property]}`);
            }
        }
        else {
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("cache-control", "no-cache");
        }
        xhr.responseType = 'blob';
        /** @type {?} */
        let that = this;
        xhr.onreadystatechange = (/**
         * @return {?}
         */
        function () {
            if (this.readyState === 4) {
                /** @type {?} */
                let contentType = xhr.getResponseHeader("Content-Type") ? xhr.getResponseHeader("Content-Type") : 'text/plain';
                if (contentType) {
                    /** @type {?} */
                    let blob = new Blob([this.response], { type: contentType });
                    that.makeAmends(blob, that);
                }
            }
        });
        /** @type {?} */
        let dto = this.params;
        if (dto) {
            xhr.send(dto);
        }
    }
    /**
     * @param {?} blob
     * @param {?} that
     * @return {?}
     */
    makeAmends(blob, that) {
        that.blobUrl = window.URL.createObjectURL(blob);
        window.open(that.blobUrl);
        this.response.emit(this.message);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        window.URL.revokeObjectURL(this.blobUrl);
        this.urlPath = '';
        this.methodType = 'GET';
        this.params = '';
        this.header = {};
        this.tagName = 'Download';
        this.styleCss = '';
        this.blobUrl = '';
        this.message = { "success": true };
    }
}
NgFileDownRestComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-file-down-rest',
                template: "<a #ngFileLinkRest href=\"{{urlPath}}\" (click)=\"handleDownload($event)\">{{tagName}}<a></a>"
            }] }
];
/** @nocollapse */
NgFileDownRestComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
NgFileDownRestComponent.propDecorators = {
    urlPath: [{ type: Input }],
    methodType: [{ type: Input }],
    params: [{ type: Input }],
    header: [{ type: Input }],
    tagName: [{ type: Input }],
    styleCss: [{ type: Input }],
    response: [{ type: Output }],
    anchorElement: [{ type: ViewChild, args: ['ngFileLinkRest', { static: false },] }]
};
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
class NgFileDownRestModule {
}
NgFileDownRestModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgFileDownRestComponent],
                imports: [],
                exports: [NgFileDownRestComponent]
            },] }
];

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
