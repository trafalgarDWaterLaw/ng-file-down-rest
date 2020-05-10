/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output, ElementRef, ViewChild, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
var NgFileDownRestComponent = /** @class */ (function () {
    function NgFileDownRestComponent(document) {
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
        params: [{ type: Input }],
        header: [{ type: Input }],
        tagName: [{ type: Input }],
        styleCss: [{ type: Input }],
        response: [{ type: Output }],
        anchorElement: [{ type: ViewChild, args: ['ngFileLinkRest', { static: false },] }]
    };
    return NgFileDownRestComponent;
}());
export { NgFileDownRestComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZmlsZS1kb3duLXJlc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZmlsZS1kb3duLXJlc3QvIiwic291cmNlcyI6WyJsaWIvbmctZmlsZS1kb3duLXJlc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQyxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2SSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0M7SUFzQkUsaUNBQXNDLFFBQVE7UUFBUixhQUFRLEdBQVIsUUFBUSxDQUFBO1FBZnJDLGVBQVUsR0FBVyxLQUFLLENBQUM7UUFHM0IsWUFBTyxHQUFXLFVBQVUsQ0FBQztRQUU1QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUU3QyxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsWUFBTyxHQUFHLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFDO0lBT3NCLENBQUM7Ozs7SUFKbkQsMENBQVE7OztJQUFSO0lBRUEsQ0FBQzs7OztJQUlELGlEQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1NBQzFEO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN4RDtJQUNILENBQUM7Ozs7O0lBQ0QsZ0RBQWM7Ozs7SUFBZCxVQUFlLEtBQUs7UUFDbEIsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLE1BQU0sRUFBRTtZQUM5QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsSUFBSSxJQUFJLENB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RUFBQyxDQUFDO0lBQ25DLENBQUM7O2dCQTFGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IseUdBQWlEO2lCQUVsRDs7OztnREFrQmMsTUFBTSxTQUFDLFFBQVE7OzswQkFoQjNCLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLE1BQU07Z0NBQ04sU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQzs7SUE4RTlDLDhCQUFDO0NBQUEsQUEzRkQsSUEyRkM7U0F0RlksdUJBQXVCOzs7SUFDbEMsMENBQXlCOztJQUN6Qiw2Q0FBb0M7O0lBQ3BDLHlDQUFxQjs7SUFDckIseUNBQXFCOztJQUNyQiwwQ0FBc0M7O0lBQ3RDLDJDQUEwQjs7SUFDMUIsMkNBQTZDOztJQUM3QyxnREFBd0U7O0lBQ3hFLDBDQUFhOztJQUNiLDBDQUE0Qjs7Ozs7SUFPaEIsMkNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1maWxlLWRvd24tcmVzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZy1maWxlLWRvd24tcmVzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgTmdGaWxlRG93blJlc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSAge1xuICBASW5wdXQoKSB1cmxQYXRoOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1ldGhvZFR5cGU6IHN0cmluZyA9ICdHRVQnO1xuICBASW5wdXQoKSBwYXJhbXM6IGFueTtcbiAgQElucHV0KCkgaGVhZGVyOiBhbnk7XG4gIEBJbnB1dCgpIHRhZ05hbWU6IHN0cmluZyA9ICdEb3dubG9hZCc7XG4gIEBJbnB1dCgpIHN0eWxlQ3NzOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSByZXNwb25zZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAVmlld0NoaWxkKCduZ0ZpbGVMaW5rUmVzdCcsIHtzdGF0aWM6IGZhbHNlfSkgYW5jaG9yRWxlbWVudDogRWxlbWVudFJlZjtcbiAgYmxvYlVybCA9ICcnO1xuICBtZXNzYWdlID0ge1wic3VjY2Vzc1wiOiB0cnVlfTtcblxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50KSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKCF0aGlzLnN0eWxlQ3NzKSB7XG4gICAgICB0aGlzLmFuY2hvckVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS5jb2xvciA9ICcjNjQ3NUZGJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hbmNob3JFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUgPSB0aGlzLnN0eWxlQ3NzO1xuICAgIH1cbiAgfVxuICBoYW5kbGVEb3dubG9hZChldmVudCkge1xuICAgIGlmICh0aGlzLm1ldGhvZFR5cGUgPT09IFwiUE9TVFwiKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRoaXMudXJsUGF0aCkge1xuICAgICAgICB0aGlzLm1ha2VBcGlDYWxsKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVzcG9uc2UuZW1pdCh0aGlzLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIG1ha2VBcGlDYWxsKCkge1xuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub3BlbignUE9TVCcsIHRoaXMudXJsUGF0aCk7XG4gICAgbGV0IGhlYWRlck9iamVjdCA9IHt9XG4gICAgaWYgKHRoaXMuaGVhZGVyKSB7XG4gICAgICBoZWFkZXJPYmplY3QgPSBKU09OLnBhcnNlKHRoaXMuaGVhZGVyKTtcbiAgICB9XG4gICAgaWYgKGhlYWRlck9iamVjdCkge1xuICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBoZWFkZXJPYmplY3QpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoYCR7cHJvcGVydHl9YCwgYCR7aGVhZGVyT2JqZWN0W3Byb3BlcnR5XX1gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJjYWNoZS1jb250cm9sXCIsIFwibm8tY2FjaGVcIik7XG4gICAgfVxuICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgbGV0IGNvbnRlbnRUeXBlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpID8geGhyLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpIDogJ3RleHQvcGxhaW4nO1xuICAgICAgICBpZiAoY29udGVudFR5cGUpIHtcbiAgICAgICAgICBsZXQgYmxvYiA9IG5ldyBCbG9iKFt0aGlzLnJlc3BvbnNlXSwge3R5cGU6IGNvbnRlbnRUeXBlfSk7XG4gICAgICAgICAgdGhhdC5tYWtlQW1lbmRzKGJsb2IsIHRoYXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBkdG8gPSB0aGlzLnBhcmFtcztcbiAgICBpZiAoZHRvKSB7XG4gICAgICB4aHIuc2VuZChkdG8pO1xuICAgIH1cbiAgfVxuXG4gIG1ha2VBbWVuZHMoYmxvYiwgdGhhdCkge1xuICAgIHRoYXQuYmxvYlVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgIHdpbmRvdy5vcGVuKHRoYXQuYmxvYlVybCk7XG4gICAgdGhpcy5yZXNwb25zZS5lbWl0KHRoaXMubWVzc2FnZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLmJsb2JVcmwpO1xuICAgIHRoaXMudXJsUGF0aCA9ICcnO1xuICAgIHRoaXMubWV0aG9kVHlwZSA9ICdHRVQnO1xuICAgIHRoaXMucGFyYW1zID0gJyc7XG4gICAgdGhpcy5oZWFkZXIgPSB7fTtcbiAgICB0aGlzLnRhZ05hbWUgPSAnRG93bmxvYWQnO1xuICAgIHRoaXMuc3R5bGVDc3MgPSAnJztcbiAgICB0aGlzLmJsb2JVcmwgPSAnJztcbiAgICB0aGlzLm1lc3NhZ2UgPSB7XCJzdWNjZXNzXCI6IHRydWV9O1xuICB9XG59XG4iXX0=