import {NgModule} from '@angular/core';
import {HighchartRouting} from './highchart.routing';
import {Highchart1Component} from './highchart1/highchart1.component';
import {HighchartMainComponent} from './highchart.main-component';


@NgModule({
  declarations : [
    Highchart1Component,
    HighchartMainComponent
  ],
  imports : [
    HighchartRouting
  ]
})
export  class HighChartModule {}
