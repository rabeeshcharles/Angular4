import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {NoWeekEndComponent} from './no-week-end/no-week-end.component';
import { Datepicker1Component } from './datepicker1/datepicker1.component';
import {DatepickerMainComponent} from './datepicker-main-component';



export  const DatepickerRoutes: Routes = [{
  path : 'datepicker',
  component : DatepickerMainComponent,
  children : [
    {
      path : '',
      component : NoWeekEndComponent
    }, {
      path : 'date1',
      component : Datepicker1Component
    }
  ]
}];

@NgModule({
  imports : [
    RouterModule.forChild(DatepickerRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export  class DatepickerRouting {}
