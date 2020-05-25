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
        this.fileName = 'myFile';
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
        /** @type {?} */
        let elm = document.createElement('a');
        elm.href = that.blobUrl;
        elm.download = this.fileName;
        document.body.append(elm);
        elm.click();
        elm.remove();
        window.URL.revokeObjectURL(that.blobUrl);
        this.response.emit(this.message);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.urlPath = '';
        this.methodType = 'GET';
        this.params = '';
        this.header = {};
        this.fileName = 'myFile';
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
    fileName: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZmlsZS1kb3duLXJlc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZmlsZS1kb3duLXJlc3QvIiwic291cmNlcyI6WyJsaWIvbmctZmlsZS1kb3duLXJlc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQyxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2SSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFNM0MsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQWtCbEMsWUFBc0MsUUFBUTtRQUFSLGFBQVEsR0FBUixRQUFRLENBQUE7UUFoQnJDLGVBQVUsR0FBVyxLQUFLLENBQUM7UUFDM0IsYUFBUSxHQUFXLFFBQVEsQ0FBQztRQUc1QixZQUFPLEdBQVcsVUFBVSxDQUFDO1FBRTVCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTdDLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixZQUFPLEdBQUcsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFPc0IsQ0FBQzs7OztJQUpuRCxRQUFRO0lBRVIsQ0FBQzs7OztJQUlELGVBQWU7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUMxRDthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDeEQ7SUFDSCxDQUFDOzs7OztJQUNELGNBQWMsQ0FBQyxLQUFLO1FBQ2xCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxNQUFNLEVBQUU7WUFDOUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3BCO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7Ozs7SUFFRCxXQUFXOztZQUNMLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRTtRQUM5QixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O1lBQzNCLFlBQVksR0FBRyxFQUFFO1FBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4QztRQUNELElBQUksWUFBWSxFQUFFO1lBQ2hCLEtBQUssTUFBTSxRQUFRLElBQUksWUFBWSxFQUFFO2dCQUNuQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxRQUFRLEVBQUUsRUFBRSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDbEU7U0FDRjthQUFNO1lBQ0wsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3pELEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDbkQ7UUFDRCxHQUFHLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQzs7WUFDdEIsSUFBSSxHQUFHLElBQUk7UUFDZixHQUFHLENBQUMsa0JBQWtCOzs7UUFBRztZQUN2QixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFOztvQkFDckIsV0FBVyxHQUFHLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZO2dCQUM5RyxJQUFJLFdBQVcsRUFBRTs7d0JBQ1gsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQyxDQUFDO29CQUN6RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDN0I7YUFDRjtRQUNILENBQUMsQ0FBQSxDQUFBOztZQUNHLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTTtRQUNyQixJQUFJLEdBQUcsRUFBRTtZQUNQLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDZjtJQUNILENBQUM7Ozs7OztJQUVELFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSTtRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUM1QyxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7UUFDckMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM3QixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDWixHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDYixNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUMsQ0FBQztJQUNuQyxDQUFDOzs7WUFqR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLHlHQUFpRDthQUVsRDs7Ozs0Q0FtQmMsTUFBTSxTQUFDLFFBQVE7OztzQkFqQjNCLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsTUFBTTs0QkFDTixTQUFTLFNBQUMsZ0JBQWdCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDOzs7O0lBUjVDLDBDQUF5Qjs7SUFDekIsNkNBQW9DOztJQUNwQywyQ0FBcUM7O0lBQ3JDLHlDQUFxQjs7SUFDckIseUNBQXFCOztJQUNyQiwwQ0FBc0M7O0lBQ3RDLDJDQUEwQjs7SUFDMUIsMkNBQTZDOztJQUM3QyxnREFBd0U7O0lBQ3hFLDBDQUFhOztJQUNiLDBDQUE0Qjs7Ozs7SUFPaEIsMkNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1maWxlLWRvd24tcmVzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZy1maWxlLWRvd24tcmVzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgTmdGaWxlRG93blJlc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSAge1xuICBASW5wdXQoKSB1cmxQYXRoOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1ldGhvZFR5cGU6IHN0cmluZyA9ICdHRVQnO1xuICBASW5wdXQoKSBmaWxlTmFtZTogc3RyaW5nID0gJ215RmlsZSc7XG4gIEBJbnB1dCgpIHBhcmFtczogYW55O1xuICBASW5wdXQoKSBoZWFkZXI6IGFueTtcbiAgQElucHV0KCkgdGFnTmFtZTogc3RyaW5nID0gJ0Rvd25sb2FkJztcbiAgQElucHV0KCkgc3R5bGVDc3M6IHN0cmluZztcbiAgQE91dHB1dCgpIHJlc3BvbnNlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBWaWV3Q2hpbGQoJ25nRmlsZUxpbmtSZXN0Jywge3N0YXRpYzogZmFsc2V9KSBhbmNob3JFbGVtZW50OiBFbGVtZW50UmVmO1xuICBibG9iVXJsID0gJyc7XG4gIG1lc3NhZ2UgPSB7XCJzdWNjZXNzXCI6IHRydWV9O1xuXG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuc3R5bGVDc3MpIHtcbiAgICAgIHRoaXMuYW5jaG9yRWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLmNvbG9yID0gJyM2NDc1RkYnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFuY2hvckVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZSA9IHRoaXMuc3R5bGVDc3M7XG4gICAgfVxuICB9XG4gIGhhbmRsZURvd25sb2FkKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMubWV0aG9kVHlwZSA9PT0gXCJQT1NUXCIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy51cmxQYXRoKSB7XG4gICAgICAgIHRoaXMubWFrZUFwaUNhbGwoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZXNwb25zZS5lbWl0KHRoaXMubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgbWFrZUFwaUNhbGwoKSB7XG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vcGVuKCdQT1NUJywgdGhpcy51cmxQYXRoKTtcbiAgICBsZXQgaGVhZGVyT2JqZWN0ID0ge31cbiAgICBpZiAodGhpcy5oZWFkZXIpIHtcbiAgICAgIGhlYWRlck9iamVjdCA9IEpTT04ucGFyc2UodGhpcy5oZWFkZXIpO1xuICAgIH1cbiAgICBpZiAoaGVhZGVyT2JqZWN0KSB7XG4gICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGhlYWRlck9iamVjdCkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihgJHtwcm9wZXJ0eX1gLCBgJHtoZWFkZXJPYmplY3RbcHJvcGVydHldfWApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcImNhY2hlLWNvbnRyb2xcIiwgXCJuby1jYWNoZVwiKTtcbiAgICB9XG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICBsZXQgY29udGVudFR5cGUgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIikgPyB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIikgOiAndGV4dC9wbGFpbic7XG4gICAgICAgIGlmIChjb250ZW50VHlwZSkge1xuICAgICAgICAgIGxldCBibG9iID0gbmV3IEJsb2IoW3RoaXMucmVzcG9uc2VdLCB7dHlwZTogY29udGVudFR5cGV9KTtcbiAgICAgICAgICB0aGF0Lm1ha2VBbWVuZHMoYmxvYiwgdGhhdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGR0byA9IHRoaXMucGFyYW1zO1xuICAgIGlmIChkdG8pIHtcbiAgICAgIHhoci5zZW5kKGR0byk7XG4gICAgfVxuICB9XG5cbiAgbWFrZUFtZW5kcyhibG9iLCB0aGF0KSB7XG4gICAgdGhhdC5ibG9iVXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgbGV0IGVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBlbG0uaHJlZiA9IHRoYXQuYmxvYlVybDtcbiAgICBlbG0uZG93bmxvYWQgPSB0aGlzLmZpbGVOYW1lO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGVsbSk7XG4gICAgZWxtLmNsaWNrKCk7XG4gICAgZWxtLnJlbW92ZSgpO1xuICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHRoYXQuYmxvYlVybCk7XG4gICAgdGhpcy5yZXNwb25zZS5lbWl0KHRoaXMubWVzc2FnZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnVybFBhdGggPSAnJztcbiAgICB0aGlzLm1ldGhvZFR5cGUgPSAnR0VUJztcbiAgICB0aGlzLnBhcmFtcyA9ICcnO1xuICAgIHRoaXMuaGVhZGVyID0ge307XG4gICAgdGhpcy5maWxlTmFtZSA9ICdteUZpbGUnO1xuICAgIHRoaXMudGFnTmFtZSA9ICdEb3dubG9hZCc7XG4gICAgdGhpcy5zdHlsZUNzcyA9ICcnO1xuICAgIHRoaXMuYmxvYlVybCA9ICcnO1xuICAgIHRoaXMubWVzc2FnZSA9IHtcInN1Y2Nlc3NcIjogdHJ1ZX07XG4gIH1cbn1cbiJdfQ==