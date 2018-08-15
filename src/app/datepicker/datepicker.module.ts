import {NgModule} from '@angular/core';

import {NoWeekEndComponent} from './no-week-end/no-week-end.component';
import {DatepickerRouting} from './datepicker.routing';
import { Datepicker1Component } from './datepicker1/datepicker1.component';
import {DatepickerMainComponent} from './datepicker-main-component';

@NgModule({
  declarations : [
    NoWeekEndComponent,
    Datepicker1Component,
    DatepickerMainComponent
  ],
  imports: [
    DatepickerRouting
  ]
})

export  class DatepickerModule {}
