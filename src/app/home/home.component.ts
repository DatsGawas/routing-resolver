/**
 * Created by dattaram on 22/9/18.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'home',
  template:`
  <h1>In Home</h1>
  {{sateData}}
  {{data | json}}
  `
})

export class HomeComponent implements OnInit {
  data: any;
  sateData: any;
  constructor(private _route: ActivatedRoute) {
  }

  ngOnInit() {
    debugger;
    setTimeout(()=>{
      this.data = this._route.snapshot.data;
      this.sateData = this._route.snapshot.data.stateData;

    }, 2000);
  }


}
