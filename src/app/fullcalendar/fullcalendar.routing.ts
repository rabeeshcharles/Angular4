import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {FullcalendarMainComponent} from './fullcalendar.main-component';
import {Fullcalendar1Component} from './fullcalendar1/fullcalendar1.component';

export const FullCalendarRoutes : Routes = [
  {
    path : '',
    component : FullcalendarMainComponent,
    children : [{
      path : '',
      component : Fullcalendar1Component
    }]
  }
];

@NgModule({
  imports : [ RouterModule.forChild(FullCalendarRoutes) ],
  exports : [ RouterModule ]
})

export class FullcalendarRouting {}
