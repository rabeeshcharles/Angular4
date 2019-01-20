import {NgModule} from '@angular/core';
import {ProgressBarComponent} from './progress-bar.component';
import {progressbarRoutes} from './progress-bar.routing';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [ProgressBarComponent],
  imports: [
    HttpClientModule,
    RouterModule.forChild(progressbarRoutes)
  ]
})
export class ProgressbarModule {

}
