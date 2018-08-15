import {NgModule} from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';

import {FullcalendarRouting} from './fullcalendar.routing';
import {Fullcalendar1Component} from './fullcalendar1/fullcalendar1.component';
import {FullcalendarMainComponent} from './fullcalendar.main-component';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    FullcalendarMainComponent,
    Fullcalendar1Component],
  imports: [FullcalendarRouting,
    ReactiveFormsModule,
  HttpClientModule],
  providers : [
    DatePipe]
})
export class FullcalendarModule {
}
