import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as SecureLS from 'secure-ls';
import { UtilFunctions } from 'src/app/config/util';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {

  bookingForm: FormGroup;
  ls = new SecureLS({ encodingType: 'aes' });
  @Output() onMeetingBooked = new EventEmitter<any>();
  currentDate = new Date();
  constructor(private utils: UtilFunctions) {
    this.bookingForm = new FormGroup({
      name: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      startTime: new FormControl('', Validators.required),
      endTime: new FormControl('', Validators.required),
    });

  }

  ngOnInit() {
  }

  createNewMeeting() {
    const first = this.bookingForm.get('startTime').value;
    const second = this.bookingForm.get('endTime').value;
    if (UtilFunctions.isTimeValid(first, second) && UtilFunctions.isNameValid(this.bookingForm.get('name').value)) {
      var currentBookings = this.ls.get('bookingForm');
      if (!currentBookings.length) currentBookings = [];
      currentBookings.push(this.bookingForm.value);
      this.ls.set('bookingForm', currentBookings);
      this.onMeetingBooked.emit(currentBookings);
    }
  }

}
