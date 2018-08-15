import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  public sidebarMenuArray: any = [
    {
      title: 'Datepicker',
      url : '/datepicker'
    } , {
      title: 'Highchart',
      url : '/highchart'
    }, {
      title: 'Fullcalendar',
      url : '/fullcalendar'
    }
  ];
  ngOnInit() {
  }

}
