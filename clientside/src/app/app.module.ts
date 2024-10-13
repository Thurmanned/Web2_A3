import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IndexComponent} from "./index.component";
import {SearchComponent} from "./search.component";
import {FundraisersComponent} from "./fundraisers.component";
import {ContactComponent} from "./contact.component";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SearchComponent,
    FundraisersComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
