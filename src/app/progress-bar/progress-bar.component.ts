import {Component, OnInit} from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  fileSelected(e) {
    console.log(e, 'g');
    const fileReader = new FileReader();

    fileReader.onloadend = function (e:any) {
      console.log(e.target.result, 'finished');
      localStorage.setItem('file', JSON.stringify(e.target.result));
      const x = JSON.parse(localStorage.getItem('file'));
      // let n = '<img class="width-100-percent" src=' + x+ ' />';
      let n = '<a class="width-100-percent" href="' + x + '"' + ' download ="' + new Date() + '">hhhhhh</a>';
      $('app-progress-bar').append(n);
    };

    fileReader.readAsDataURL(e);

  }

}
