import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DxTagBoxModule} from "devextreme-angular";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        DxTagBoxModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
