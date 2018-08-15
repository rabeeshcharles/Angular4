
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {chart} from 'highcharts';
import { Chart } from 'highcharts';
import * as Highcharts from 'highcharts';

declare let $: any;

@Component({
  selector: 'app-highchart1',
  templateUrl: './highchart1.component.html',
  styleUrls: ['./highchart1.component.css']
})
export class Highchart1Component implements OnInit {
  constructor() {}
  @ViewChild('highchart') highchart: ElementRef;
  Chart: Highcharts.ChartObject;

  categoriesData: any = [
    '07-01-18' , '07-11-18' , '07-15-18' , '07-20-18' , '07-21-18' , '07-28-18'
  ];

  seriesData1: any = [
    null , 80 , null , 10, null , 70
  ];
  seriesData2: any = [100 , null , 90 , null , 5 , null];

  firstData: any = [];
  secondData: any = [];

  FirstData() {
    for ( let i = 0; i < this.seriesData1.length; i++ ) {
      if (this.seriesData1[i] == null) {
        this.firstData.push('');
      } else {
        this.firstData.push(this.categoriesData[i]);
      }
    }
    console.log('this.firstData', this.firstData);

    this.Chart.xAxis[0].setCategories(this.firstData, true);

  }
  SecondData() {
    for ( let i = 0; i < this.seriesData2.length; i++ ) {
      if (this.seriesData2[i] == null) {
        this.secondData.push('');
      } else {
        this.secondData.push(this.categoriesData[i]);
      }
    }
    console.log('this.secondData', this.secondData);
    this.Chart.xAxis[0].setCategories(this.secondData, true);
  }

  Both() {
    const allData = this.categoriesData;
    this.Chart.xAxis[0].setCategories(allData , true);

  }
  ngOnInit() {
    $('.dPicker2').datepicker({
      beforeShowDay:  (e) => {
        const selectedDate = $('.dPicker2').datepicker('getDate');

// console.log(selectedDate)
        if (selectedDate.getDate() === e.getDate()) {
          return[true, 'primary'];
        } else {
          return [true];
        }
// return this.weekend(selectedDate.getDay())
      }

    });

    const options: Highcharts.options = {
      title: 'My First HihgChart' ,
      chart : {
        type : 'column'
      },
      xAxis : {
        categories : this.categoriesData
      },
      yAxis : {
        title: {
          text :  'Y Axix'
        }
      },
      series : [
        {
          name : 'Series Data 1',
          data : this.seriesData1
        }, {
          name : 'Series Data 2',
          data : this.seriesData2
        }
      ],
      plotOptions : {
        series : {
          events : {
            legendItemClick: (events) => {
              setTimeout(() => {
                if (  !events.target.chart.series[0].visible) {
                  this.SecondData();
                } else if (  !events.target.chart.series[1].visible) {
                  this.FirstData();
                } else {
                  this.Both();
                }
              }, 1 );
            }
          }
        }
      }
    };
    this.Chart = chart(this.highchart.nativeElement , options);
  }

}
