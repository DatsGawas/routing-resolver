import {NgModule} from '@angular/core';

import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild([
      {
        path: '', component: HomeComponent
      }
    ])
  ], exports: [], declarations: [HomeComponent], providers: [],
})
export class HomeModule {
}
