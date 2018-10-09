/**
 * Created by dattaram on 22/9/18.
 */
import {Injectable} from '@angular/core';
import {CanLoad, Route} from "@angular/router";

@Injectable()
export class HomeAuthService implements CanLoad {
  canLoad(route: Route): boolean {
    debugger;
    return true;
  }
  constructor() {
  }

}
