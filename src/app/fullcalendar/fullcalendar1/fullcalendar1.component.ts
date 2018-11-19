import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../auth/auth.service';
import {DatePipe} from '@angular/common';
import * as firebase from 'firebase';

declare let $: any;

@Component({
  selector: 'app-fullcalendar1',
  templateUrl: './fullcalendar1.component.html',
  styleUrls: ['./fullcalendar1.component.css']
})
export class Fullcalendar1Component implements OnInit {

  public inputDate: any = '';
  public inputDateModal: any;
  private eventClickObject: any;
  @Input() public eventSource: any

    = [{
    title: 'sss',
    start: '2018-07-04'
  }];
  @Input() public eventSourceModal: any

    = [];

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private authService: AuthService,
              private datePipe: DatePipe
  ) {
  }

  fullCalendarEventForm: FormGroup;
  fullCalendarEventFormModal: FormGroup;
  readonly URL = 'https://ng-4-fb828.firebaseio.com';

  ngOnInit() {
    $('#editEventModalId').appendTo('body');
    const email = 'a@gmail.com';
    const pass = '123456';
    const p = new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, pass)
        .then(() => {
          resolve('success resolve');
        })
        .catch(() => {
          reject('reject');
        });
    });
    p.then((g) => {
      console.log(g);
      const token = this.authService.getToken();
      const tokenPromise = new Promise((resolve, reject) => {
        firebase.auth().currentUser.getIdToken().then((e) => {
          resolve(e);
        })
          .catch(() => {
            reject('fails');
          });
      });
      tokenPromise.then((e) => {
        console.log(e);

        this.http.get(this.URL + '/fullcalendar.json?auth=' + e).subscribe((e: any) => {
          console.log('=====================================', e);
          this.eventSource = e;
          this.updatedSourceData();
        });
        console.log(this.eventSource);
      });

    })
      .catch((f) => {
        console.log(f);
      });

    $('#inputDatepickerId').datepicker({
      dateFormat: 'yy-mm-dd'
    })
      .datepicker().val(null);

    $('#inputDatepickerIdModal').datepicker({
      minDate: new Date(),

      onSelect: (e) => {
        console.log(e);
      },
      dateFormat: 'yy-mm-dd'
    });
    this.fullCalendarEventForm = this.formBuilder.group({
      eventTitle: [''],
      eventDate: ['']
    });
    // Form For Modal
    this.fullCalendarEventFormModal = this.formBuilder.group({
      eventTitleModal: [''],
      eventDateModal: ['']
    });
    $('#fullCalendarId').fullCalendar({
      editable: true,
      events: this.eventSource,
      // events: this.updatedSourceData(),
      dayClick: function (date, e, ui) {
        // console.log(date.format());
      },
      eventClick: (e) => {
        this.eventClickObject = e;
        $('#editEventModalId').modal('show');
        // Form For Modal
        setTimeout(() => {
          this.fullCalendarEventFormModal.controls['eventTitleModal'].setValue(e.title);
          // this.fullCalendarEventFormModal.controls['eventDateModal'].setValue(this.datePipe.transform(e.start, 'yy-mm-dd'));
          // console.log(this.datePipe.transform(e.start, 'yyyy-MM-dd'));
          $('#inputDatepickerIdModal').datepicker().val(this.datePipe.transform(e.start, 'yyyy-MM-dd'));


          // $('#inputDatepickerIdModal').val(this.datePipe.transform(e.start,'dd-MM-yyyy'))
        }, 10);

        console.log(e);


      }
    });

  }


  changeDate() {
    const x = $('#inputDatepickerId').val();
    this.inputDate = x;
    console.log(this.inputDate);

  }

  changeDateModal() {
    let y = $('#inputDatepickerIdModal').val();
    this.inputDateModal = y;
    console.log(this.inputDateModal);
  }

  onSubmit() {
    console.log('this.fullCalendarEventForm.valid', this.fullCalendarEventForm.valid);
    this.changeDate();
    // let y = x.valueOf()
    this.fullCalendarEventForm.controls['eventDate'].setValue(this.inputDate);
    this.updateSourceData(this.fullCalendarEventForm.value);
    this.fullCalendarEventForm.reset();
    // console.log(this.inputDate, this.fullCalendarEventForm);
  }

  onSubmitModal() {
    let e = this.eventClickObject;
    console.log('this.fullCalendarEventFormModal.valid', this.fullCalendarEventFormModal.value);
    this.changeDateModal();
    this.fullCalendarEventFormModal.controls['eventDateModal'].setValue(this.inputDateModal);

    // e.title = this.fullCalendarEventFormModal.value.eventTitleModal
    e.start = this.fullCalendarEventFormModal.value.eventDateModal;
    console.log(e);
    $('#fullCalendarId').fullCalendar('updateEvent', e);
    $('#editEventModalId').modal('hide');
    this.fullCalendarEventFormModal.reset();

    // let y = x.valueOf()
    // this.updateSourceDataModal(this.fullCalendarEventFormModal.value);
    // console.log(this.inputDate, this.fullCalendarEventForm);
  }

  deleteEvent() {
    let e = this.eventClickObject;
    console.log(e);

    $('#fullCalendarId').fullCalendar('removeEvents', e._id);
    this.fullCalendarEventFormModal.reset();
    // $('#fullCalendarId').fullCalendar('refetchEventSources');

  }

  updateSourceData(data) {
    console.log(data);
    if (this.fullCalendarEventForm.valid) {
      const obj = {
        title: data.eventTitle,
        start: data.eventDate,
        allDay: true
      };
      // console.log('obj', obj);
      this.eventSource = [];
      this.eventSource.push(obj);
      this.updateEventSource();

    }
  }

  updateSourceDataModal(data) {
    console.log(data);
    if (this.fullCalendarEventFormModal.valid) {
      const obj = {
        title: data.eventTitleModal,
        start: data.eventDateModal,
        allDay: true
      };
      console.log('obj', obj);
      this.eventSourceModal.push(obj);
      this.updateEventSourceModal();

    }
  }

  updatedSourceData() {
    this.updateEventSource();
  }

  updateEventSource() {

    $('#fullCalendarId').fullCalendar('addEventSource', this.eventSource);
  }

  updateEventSourceModal() {
    $('#fullCalendarId').fullCalendar('updateEvents', this.eventSourceModal);
  }

}
