/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output, ElementRef, ViewChild, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
export class NgFileDownRestComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZmlsZS1kb3duLXJlc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZmlsZS1kb3duLXJlc3QvIiwic291cmNlcyI6WyJsaWIvbmctZmlsZS1kb3duLXJlc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQyxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2SSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFNM0MsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQWlCbEMsWUFBc0MsUUFBUTtRQUFSLGFBQVEsR0FBUixRQUFRLENBQUE7UUFmckMsZUFBVSxHQUFXLEtBQUssQ0FBQztRQUczQixZQUFPLEdBQVcsVUFBVSxDQUFDO1FBRTVCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTdDLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixZQUFPLEdBQUcsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFPc0IsQ0FBQzs7OztJQUpuRCxRQUFRO0lBRVIsQ0FBQzs7OztJQUlELGVBQWU7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUMxRDthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDeEQ7SUFDSCxDQUFDOzs7OztJQUNELGNBQWMsQ0FBQyxLQUFLO1FBQ2xCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxNQUFNLEVBQUU7WUFDOUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLElBQUksSUFBSSxDQUFDLE9B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OztZQTFGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IseUdBQWlEO2FBRWxEOzs7OzRDQWtCYyxNQUFNLFNBQUMsUUFBUTs7O3NCQWhCM0IsS0FBSzt5QkFDTCxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsTUFBTTs0QkFDTixTQUFTLFNBQUMsZ0JBQWdCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDOzs7O0lBUDVDLDBDQUF5Qjs7SUFDekIsNkNBQW9DOztJQUNwQyx5Q0FBcUI7O0lBQ3JCLHlDQUFxQjs7SUFDckIsMENBQXNDOztJQUN0QywyQ0FBMEI7O0lBQzFCLDJDQUE2Qzs7SUFDN0MsZ0RBQXdFOztJQUN4RSwwQ0FBYTs7SUFDYiwwQ0FBNEI7Ozs7O0lBT2hCLDJDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctZmlsZS1kb3duLXJlc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmctZmlsZS1kb3duLXJlc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE5nRmlsZURvd25SZXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kgIHtcbiAgQElucHV0KCkgdXJsUGF0aDogc3RyaW5nO1xuICBASW5wdXQoKSBtZXRob2RUeXBlOiBzdHJpbmcgPSAnR0VUJztcbiAgQElucHV0KCkgcGFyYW1zOiBhbnk7XG4gIEBJbnB1dCgpIGhlYWRlcjogYW55O1xuICBASW5wdXQoKSB0YWdOYW1lOiBzdHJpbmcgPSAnRG93bmxvYWQnO1xuICBASW5wdXQoKSBzdHlsZUNzczogc3RyaW5nO1xuICBAT3V0cHV0KCkgcmVzcG9uc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQFZpZXdDaGlsZCgnbmdGaWxlTGlua1Jlc3QnLCB7c3RhdGljOiBmYWxzZX0pIGFuY2hvckVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIGJsb2JVcmwgPSAnJztcbiAgbWVzc2FnZSA9IHtcInN1Y2Nlc3NcIjogdHJ1ZX07XG5cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudCkgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICghdGhpcy5zdHlsZUNzcykge1xuICAgICAgdGhpcy5hbmNob3JFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUuY29sb3IgPSAnIzY0NzVGRic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYW5jaG9yRWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlID0gdGhpcy5zdHlsZUNzcztcbiAgICB9XG4gIH1cbiAgaGFuZGxlRG93bmxvYWQoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5tZXRob2RUeXBlID09PSBcIlBPU1RcIikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLnVybFBhdGgpIHtcbiAgICAgICAgdGhpcy5tYWtlQXBpQ2FsbCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlc3BvbnNlLmVtaXQodGhpcy5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBtYWtlQXBpQ2FsbCgpIHtcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9wZW4oJ1BPU1QnLCB0aGlzLnVybFBhdGgpO1xuICAgIGxldCBoZWFkZXJPYmplY3QgPSB7fVxuICAgIGlmICh0aGlzLmhlYWRlcikge1xuICAgICAgaGVhZGVyT2JqZWN0ID0gSlNPTi5wYXJzZSh0aGlzLmhlYWRlcik7XG4gICAgfVxuICAgIGlmIChoZWFkZXJPYmplY3QpIHtcbiAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gaGVhZGVyT2JqZWN0KSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGAke3Byb3BlcnR5fWAsIGAke2hlYWRlck9iamVjdFtwcm9wZXJ0eV19YCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiY2FjaGUtY29udHJvbFwiLCBcIm5vLWNhY2hlXCIpO1xuICAgIH1cbiAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgIGxldCBjb250ZW50VHlwZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKSA/IHhoci5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKSA6ICd0ZXh0L3BsYWluJztcbiAgICAgICAgaWYgKGNvbnRlbnRUeXBlKSB7XG4gICAgICAgICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbdGhpcy5yZXNwb25zZV0sIHt0eXBlOiBjb250ZW50VHlwZX0pO1xuICAgICAgICAgIHRoYXQubWFrZUFtZW5kcyhibG9iLCB0aGF0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgZHRvID0gdGhpcy5wYXJhbXM7XG4gICAgaWYgKGR0bykge1xuICAgICAgeGhyLnNlbmQoZHRvKTtcbiAgICB9XG4gIH1cblxuICBtYWtlQW1lbmRzKGJsb2IsIHRoYXQpIHtcbiAgICB0aGF0LmJsb2JVcmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICB3aW5kb3cub3Blbih0aGF0LmJsb2JVcmwpO1xuICAgIHRoaXMucmVzcG9uc2UuZW1pdCh0aGlzLm1lc3NhZ2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5ibG9iVXJsKTtcbiAgICB0aGlzLnVybFBhdGggPSAnJztcbiAgICB0aGlzLm1ldGhvZFR5cGUgPSAnR0VUJztcbiAgICB0aGlzLnBhcmFtcyA9ICcnO1xuICAgIHRoaXMuaGVhZGVyID0ge307XG4gICAgdGhpcy50YWdOYW1lID0gJ0Rvd25sb2FkJztcbiAgICB0aGlzLnN0eWxlQ3NzID0gJyc7XG4gICAgdGhpcy5ibG9iVXJsID0gJyc7XG4gICAgdGhpcy5tZXNzYWdlID0ge1wic3VjY2Vzc1wiOiB0cnVlfTtcbiAgfVxufVxuIl19