import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { LanguageService } from "../../services/language.service";

@Component({
  selector: 'app-all-meetings',
  templateUrl: './all-meetings.component.html',
  styleUrls: ['./all-meetings.component.css']
})
export class AllMeetingsComponent implements OnInit, OnChanges {

  @Input() allBookings = [];
  @Input() languageData = {};

  constructor(public languageService: LanguageService ) { 
  }

  ngOnInit() {
    this.languageData = this.languageService.getLanguageData();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setBookingOrder(changes.allBookings.currentValue);
  }

  setBookingOrder(value){
    if(this.allBookings) {
      this.allBookings.sort(this.sortByDate);
      this.allBookings.sort(this.sortByTime);
    }
  }
  
  sortByDate(a, b){
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  }

  sortByTime(a, b){
    return new Date(a.startingHour).getTime() - new Date(b.startingHour).getTime();
  }


}
