/**
 * Created by dattaram on 23/9/18.
 */
import {Injectable} from '@angular/core';
import {Resolve} from "@angular/router";

@Injectable()
export class StateService implements Resolve<any> {

  constructor() {
  }

  resolve() {
    debugger;
    return 'test';
  }
}
