import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IndexComponent} from "./index.component";
import {SearchComponent} from "./search.component";
import {FundraisersComponent} from "./fundraisers.component";
import {ContactComponent} from "./contact.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {DonateComponent} from "./donate.component";
import {AdminComponent} from "./admin.component";
import {CreateComponent} from "./create.component";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SearchComponent,
    FundraisersComponent,
    ContactComponent,
    DonateComponent,
    AdminComponent,
    CreateComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
