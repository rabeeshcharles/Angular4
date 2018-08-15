import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-no-week-end',
  templateUrl: './no-week-end.component.html',
  styleUrls: ['./no-week-end.component.css']
})
export class NoWeekEndComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#noWeekEnd').datepicker({
      beforeShowDay : (defaultDates) => {
        const e = defaultDates.getDay();
        if (e > 0 && e < 6) {
          return [true , 'no-week-end' , 'Available' ];
        } else {
          return [false , '' , 'Not Available' ];

        }
      }
    });
  }

}
