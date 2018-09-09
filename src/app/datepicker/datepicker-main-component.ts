import { Component, OnInit } from '@angular/core';

@Component({
  template: `<router-outlet></router-outlet>`
})
export class DatepickerMainComponent implements OnInit {

  ngOnInit() {
    // console.log(this.router.url);
  }

}
