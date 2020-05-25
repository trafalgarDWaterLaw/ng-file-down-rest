# NgFileDownloadRest

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## usage 

### Importing the library
`import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgFileDownRestModule } from 'ng-file-down-rest';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgFileDownRestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`

### Input parameters of the library are as follows:

#### urlPath
Of type string, takes prepared rest url of the rest call(GET/POST) for file download.

#### methodType
Of type string, takes two values (`GET` and `POST`)

#### params
Of type string, takes stringified object as input(body of post rest call). 
eg: `"{'fileName':'sound.wav'}"`

#### fileName
Of type string, specify the file name of the file to be downloaded. 
eg: `"myFile"`

#### header
Of type string, takes stringified object as input. Object contains header key value pair for the rest call.
eg: `"{'Content-Type':'application/json', 'cache-control':'no-cache'}"`

#### tagName
Of type string, name of the anchor tag.
eg: `"Download button"`

#### styleCss
Of type string eg: `"color:black"`

### Output Parameter of the library as follows:

#### response
subscribe to this event to check whether the Rest call was success or not. 

sample response: `{"success": true}`

## Further help

To get more help on this library go check out the [Issues Page](https://github.com/trafalgarDWaterLaw/ng-file-down-rest/issues).
