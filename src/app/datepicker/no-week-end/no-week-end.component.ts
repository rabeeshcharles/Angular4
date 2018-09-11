import {Component, OnInit, AfterViewChecked} from '@angular/core';

declare let $: any;
declare let paypal: any;

@Component({
  selector: 'app-no-week-end',
  templateUrl: './no-week-end.component.html',
  styleUrls: ['./no-week-end.component.css']
})
export class NoWeekEndComponent implements OnInit, AfterViewChecked {

  constructor() {
  }


  public didPaypalScriptLoad: boolean = false;
  public loading: any = true;

  public paymentAmount: any = 0;

  public paypalConfig: any = {
    env: 'sandbox',
    client: {
      sandbox: 'AY_OpAGcrmvHlA76u54WM_UvyNbvnrJHTP-cbE8LOdOuvYIEvKnbDh2_LvBNUFj9-lQRFD1sn8g1lpes',
      production: 'ENfn5A4iutnnPTZUKY-Oshy0Jp5Wrj9uzujzXUJFFDP4J0nYzyEmcTsp5eiuB5YdWE2Y9jWLIpdzT1xJ'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            {amount: {total: this.paymentAmount, currency: 'CAD'}}
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        // show success page
        console.log('payment success', payment);
      });
    }
  };

  public ngAfterViewChecked(): void {
    if (!this.didPaypalScriptLoad) {
      this.loadPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-button');
        this.loading = false;
      });
    }
  }

  public loadPaypalScript(): Promise<any> {
    this.didPaypalScriptLoad = true;
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }


  ngOnInit() {
    $('#noWeekEnd').datepicker({
      beforeShowDay: (defaultDates) => {
        const e = defaultDates.getDay();
        if (e > 0 && e < 6) {
          return [true, 'no-week-end', 'Available'];
        } else {
          return [false, '', 'Not Available'];

        }
      }
    });
  }


}
