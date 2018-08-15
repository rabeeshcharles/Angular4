import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {HighchartMainComponent} from './highchart.main-component';
import {Highchart1Component} from './highchart1/highchart1.component';

export const HighChartRoutes: Routes = [{
    path : '',
    component : HighchartMainComponent,
    children : [{
      path : '',
      component : Highchart1Component
    }]
  }];


@NgModule({
  imports : [ RouterModule.forChild(HighChartRoutes) ],
  exports : [ RouterModule ]
})

export class HighchartRouting {}
