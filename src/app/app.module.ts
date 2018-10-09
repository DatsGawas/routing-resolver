import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeAuthService} from './home/homeAuth.service';
import {CountryService} from './countryService';
import {CountryResolver} from './home/resolve.service';
import {HttpClientModule} from "@angular/common/http";
import {StateService} from "./home/sate.service";
import { AmexioWidgetModule } from 'amexio-ng-extensions';

const routes: Routes = [
  {
    path: 'home', resolve: {country: CountryResolver, stateData: StateService}, canLoad: [HomeAuthService], loadChildren: './home/home.module#HomeModule'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AmexioWidgetModule, RouterModule.forRoot(routes), HttpClientModule
  ],
  providers: [HomeAuthService, CountryService, CountryResolver, StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
