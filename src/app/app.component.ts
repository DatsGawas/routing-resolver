import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
      `.curly-braces {
      border-left: 2px dashed;
      border-right: 2px dashed;
      border-color: #000000;
      border-radius: 15px;
    }
    .curly-braces-contains {
      min-height:50px;
      width: 95%;
      padding: 10px;
    }
    `
  ]
})
export class AppComponent {

  treeData: any;

  constructor(private _route: Router) {

    this.treeData = {
      "type": "onLoad",
      "eventName": "On Load",
      "body": [
        {
          "body": [
            {
              "body": [],
              "defination": [],
              "id": "",
              "text": "",
              "leaf": true,
              "action": "",
              "metadata": "{}",
              "parentRef": {},
              "notifyMsgType": "success",
              "type": "If",
              "suffix": "Matched",
              "events" : ['add', ' remove', ': update']
            },
            {
              "body": [],
              "defination": [],
              "id": "",
              "text": "",
              "leaf": true,
              "action": "",
              "metadata": "{}",
              "parentRef": {},
              "notifyMsgType": "success",
              "type": "Else If",
              "suffix": "Matched",
              "events" : ['add', ' remove', 'update']
            },
            {
              "body": [],
              "defination": [],
              "id": "",
              "text": "",
              "leaf": true,
              "action": "",
              "metadata": "{}",
              "parentRef": {},
              "notifyMsgType": "success",
              "type": "Else",
              "suffix": "",
              "events" : ['add', ' remove', 'update']
            }
          ],
          "defination": [],
          "id": "",
          "text": "",
          "leaf": true,
          "action": "",
          "metadata": "{}",
          "parentRef": {},
          "notifyMsgType": "success",
          "type": "condition",
          "suffix": "",
          "events" : ['add', 'remove', 'update']
        },
        {
          "body": [
            {
              "body": [],
              "defination": [],
              "id": "",
              "text": "",
              "leaf": true,
              "action": "",
              "metadata": "{}",
              "parentRef": {},
              "notifyMsgType": "success",
              "type": "update",
              "suffix": "",
              "events" : ['add', 'remove', 'update']
            }
          ],
          "defination": [],
          "id": "",
          "text": "",
          "leaf": true,
          "action": "",
          "metadata": "{}",
          "parentRef": {},
          "notifyMsgType": "success",
          "type": "Service",
          "suffix": "Called",
          "events" : ['add', 'remove', 'update']

        }
      ]
    };

  }

  goToHome() {
   this._route.navigate(['home']);
  }
}

export class EventRetaionshipDataStructure {
  body: any[];
  defination: any[];
  id: string;
  text: string;
  leaf: boolean;
  action: any;
  metadata: any;
  parentRef: any;
  notifyMsgType: string;
  type: string;
  isUpdateMode: boolean;
  suffix: string;
  events: any[];
  constructor() {
    this.body = [];
    this.defination = [];
    this.id = '';
    this.text = '';
    this.leaf = false;
    this.action = {};
    this.metadata = {};
    this.parentRef = {};
    this.notifyMsgType = '';
    this.type = '';
    this.isUpdateMode = false;
    this.suffix = ''
    this.events = ['add', 'remove', 'update'];
  }
}
