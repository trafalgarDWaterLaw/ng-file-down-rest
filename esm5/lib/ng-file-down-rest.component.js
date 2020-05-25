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
export { NgFileDownRestComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZmlsZS1kb3duLXJlc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZmlsZS1kb3duLXJlc3QvIiwic291cmNlcyI6WyJsaWIvbmctZmlsZS1kb3duLXJlc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQyxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2SSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0M7SUF1QkUsaUNBQXNDLFFBQVE7UUFBUixhQUFRLEdBQVIsUUFBUSxDQUFBO1FBaEJyQyxlQUFVLEdBQVcsS0FBSyxDQUFDO1FBQzNCLGFBQVEsR0FBVyxRQUFRLENBQUM7UUFHNUIsWUFBTyxHQUFXLFVBQVUsQ0FBQztRQUU1QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUU3QyxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsWUFBTyxHQUFHLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFDO0lBT3NCLENBQUM7Ozs7SUFKbkQsMENBQVE7OztJQUFSO0lBRUEsQ0FBQzs7OztJQUlELGlEQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1NBQzFEO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN4RDtJQUNILENBQUM7Ozs7O0lBQ0QsZ0RBQWM7Ozs7SUFBZCxVQUFlLEtBQUs7UUFDbEIsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLE1BQU0sRUFBRTtZQUM5QixLQUFLLENBQUMsY0FBYyxF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UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUMsQ0FBQztJQUNuQyxDQUFDOztnQkFqR0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLHlHQUFpRDtpQkFFbEQ7Ozs7Z0RBbUJjLE1BQU0sU0FBQyxRQUFROzs7MEJBakIzQixLQUFLOzZCQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLE1BQU07Z0NBQ04sU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQzs7SUFvRjlDLDhCQUFDO0NBQUEsQUFsR0QsSUFrR0M7U0E3RlksdUJBQXVCOzs7SUFDbEMsMENBQXlCOztJQUN6Qiw2Q0FBb0M7O0lBQ3BDLDJDQUFxQzs7SUFDckMseUNBQXFCOztJQUNyQix5Q0FBcUI7O0lBQ3JCLDBDQUFzQzs7SUFDdEMsMkNBQTBCOztJQUMxQiwyQ0FBNkM7O0lBQzdDLGdEQUF3RTs7SUFDeEUsMENBQWE7O0lBQ2IsMENBQTRCOzs7OztJQU9oQiwyQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWZpbGUtZG93bi1yZXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL25nLWZpbGUtZG93bi1yZXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBOZ0ZpbGVEb3duUmVzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95ICB7XG4gIEBJbnB1dCgpIHVybFBhdGg6IHN0cmluZztcbiAgQElucHV0KCkgbWV0aG9kVHlwZTogc3RyaW5nID0gJ0dFVCc7XG4gIEBJbnB1dCgpIGZpbGVOYW1lOiBzdHJpbmcgPSAnbXlGaWxlJztcbiAgQElucHV0KCkgcGFyYW1zOiBhbnk7XG4gIEBJbnB1dCgpIGhlYWRlcjogYW55O1xuICBASW5wdXQoKSB0YWdOYW1lOiBzdHJpbmcgPSAnRG93bmxvYWQnO1xuICBASW5wdXQoKSBzdHlsZUNzczogc3RyaW5nO1xuICBAT3V0cHV0KCkgcmVzcG9uc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQFZpZXdDaGlsZCgnbmdGaWxlTGlua1Jlc3QnLCB7c3RhdGljOiBmYWxzZX0pIGFuY2hvckVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIGJsb2JVcmwgPSAnJztcbiAgbWVzc2FnZSA9IHtcInN1Y2Nlc3NcIjogdHJ1ZX07XG5cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudCkgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICghdGhpcy5zdHlsZUNzcykge1xuICAgICAgdGhpcy5hbmNob3JFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUuY29sb3IgPSAnIzY0NzVGRic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYW5jaG9yRWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlID0gdGhpcy5zdHlsZUNzcztcbiAgICB9XG4gIH1cbiAgaGFuZGxlRG93bmxvYWQoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5tZXRob2RUeXBlID09PSBcIlBPU1RcIikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLnVybFBhdGgpIHtcbiAgICAgICAgdGhpcy5tYWtlQXBpQ2FsbCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlc3BvbnNlLmVtaXQodGhpcy5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBtYWtlQXBpQ2FsbCgpIHtcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9wZW4oJ1BPU1QnLCB0aGlzLnVybFBhdGgpO1xuICAgIGxldCBoZWFkZXJPYmplY3QgPSB7fVxuICAgIGlmICh0aGlzLmhlYWRlcikge1xuICAgICAgaGVhZGVyT2JqZWN0ID0gSlNPTi5wYXJzZSh0aGlzLmhlYWRlcik7XG4gICAgfVxuICAgIGlmIChoZWFkZXJPYmplY3QpIHtcbiAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gaGVhZGVyT2JqZWN0KSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGAke3Byb3BlcnR5fWAsIGAke2hlYWRlck9iamVjdFtwcm9wZXJ0eV19YCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiY2FjaGUtY29udHJvbFwiLCBcIm5vLWNhY2hlXCIpO1xuICAgIH1cbiAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgIGxldCBjb250ZW50VHlwZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKSA/IHhoci5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKSA6ICd0ZXh0L3BsYWluJztcbiAgICAgICAgaWYgKGNvbnRlbnRUeXBlKSB7XG4gICAgICAgICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbdGhpcy5yZXNwb25zZV0sIHt0eXBlOiBjb250ZW50VHlwZX0pO1xuICAgICAgICAgIHRoYXQubWFrZUFtZW5kcyhibG9iLCB0aGF0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgZHRvID0gdGhpcy5wYXJhbXM7XG4gICAgaWYgKGR0bykge1xuICAgICAgeGhyLnNlbmQoZHRvKTtcbiAgICB9XG4gIH1cblxuICBtYWtlQW1lbmRzKGJsb2IsIHRoYXQpIHtcbiAgICB0aGF0LmJsb2JVcmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICBsZXQgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGVsbS5ocmVmID0gdGhhdC5ibG9iVXJsO1xuICAgIGVsbS5kb3dubG9hZCA9IHRoaXMuZmlsZU5hbWU7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZWxtKTtcbiAgICBlbG0uY2xpY2soKTtcbiAgICBlbG0ucmVtb3ZlKCk7XG4gICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodGhhdC5ibG9iVXJsKTtcbiAgICB0aGlzLnJlc3BvbnNlLmVtaXQodGhpcy5tZXNzYWdlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMudXJsUGF0aCA9ICcnO1xuICAgIHRoaXMubWV0aG9kVHlwZSA9ICdHRVQnO1xuICAgIHRoaXMucGFyYW1zID0gJyc7XG4gICAgdGhpcy5oZWFkZXIgPSB7fTtcbiAgICB0aGlzLmZpbGVOYW1lID0gJ215RmlsZSc7XG4gICAgdGhpcy50YWdOYW1lID0gJ0Rvd25sb2FkJztcbiAgICB0aGlzLnN0eWxlQ3NzID0gJyc7XG4gICAgdGhpcy5ibG9iVXJsID0gJyc7XG4gICAgdGhpcy5tZXNzYWdlID0ge1wic3VjY2Vzc1wiOiB0cnVlfTtcbiAgfVxufVxuIl19