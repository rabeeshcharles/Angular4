import {Routes} from '@angular/router';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';

export  const AppRoutes: Routes = [{
  path : '',
  component : AdminLayoutComponent,
  children : [{
    path : '',
    loadChildren : './datepicker/datepicker.module#DatepickerModule'
  }, {
    path : 'highchart',
    loadChildren : './highchart/highchart.module#HighChartModule'
  }, {
    path : 'fullcalendar',
    loadChildren : './fullcalendar/fullcalendar.module#FullcalendarModule'
  }, {
    path : 'progressbar',
    loadChildren : './progress-bar/progressbar.module#ProgressbarModule'

  }]
}];
