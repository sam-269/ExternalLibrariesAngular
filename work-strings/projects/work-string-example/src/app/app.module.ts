import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WorkStringsModule } from 'work-strings'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WorkStringsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
