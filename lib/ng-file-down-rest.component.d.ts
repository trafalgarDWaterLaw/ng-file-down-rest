import { OnInit, AfterViewInit, OnDestroy, EventEmitter, ElementRef } from '@angular/core';
export declare class NgFileDownRestComponent implements OnInit, AfterViewInit, OnDestroy {
    private document;
    urlPath: string;
    methodType: string;
    fileName: string;
    params: any;
    header: any;
    tagName: string;
    styleCss: string;
    response: EventEmitter<any>;
    anchorElement: ElementRef;
    blobUrl: string;
    message: {
        "success": boolean;
    };
    ngOnInit(): void;
    constructor(document: any);
    ngAfterViewInit(): void;
    handleDownload(event: any): void;
    makeApiCall(): void;
    makeAmends(blob: any, that: any): void;
    ngOnDestroy(): void;
}
