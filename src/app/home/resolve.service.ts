
/**
 * Created by dattaram on 22/9/18.
 */


import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {CountryService} from '../countryService';
import {Observable, throwError} from "rxjs/index";
import {catchError} from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class CountryResolver implements Resolve<any> {

  constructor(private _countryService: CountryService) {
  }

  resolve() {
    debugger;
    return this._countryService.getCountryData().pipe(
      catchError( err => {
          return of({error: err});
      })
    );
  }
}
