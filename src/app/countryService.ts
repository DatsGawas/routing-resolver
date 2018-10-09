/**
 * Created by dattaram on 22/9/18.
 */


import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable()
export class CountryService {

  constructor(private _http: HttpClient) {
  }

  getCountryData() {
     return this._http.get('assets/data/country1.json');
  }
}
