import {Component, OnInit} from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    const config = {
      apiKey: 'AIzaSyB_YYsjhsLuo0vApBApWD-whP_D-wLaQMY',
      databaseURL: 'ng-4-fb828.firebaseio.com/',
    };
    firebase.initializeApp(config);
  }

}
