import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PackagesComponent } from './packages/packages.component';
import { PackagedetailComponent } from './packagedetail/packagedetail.component';
import { BookingdetailComponent } from './bookingdetail/bookingdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    PackagesComponent,
    PackagedetailComponent,
    BookingdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
