import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-all-meetings',
  templateUrl: './all-meetings.component.html',
  styleUrls: ['./all-meetings.component.css']
})
export class AllMeetingsComponent implements OnInit {

  @Input() allBookings;
  constructor() { }

  ngOnInit() {
  }

}
