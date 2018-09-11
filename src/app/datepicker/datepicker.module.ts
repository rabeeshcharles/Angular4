import {NgModule} from '@angular/core';

import {NoWeekEndComponent} from './no-week-end/no-week-end.component';
import {DatepickerRouting} from './datepicker.routing';
import { Datepicker1Component } from './datepicker1/datepicker1.component';
import {DatepickerMainComponent} from './datepicker-main-component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations : [
    NoWeekEndComponent,
    Datepicker1Component,
    DatepickerMainComponent
  ],
  imports: [
    DatepickerRouting,
    FormsModule
  ]
})

export  class DatepickerModule {}
