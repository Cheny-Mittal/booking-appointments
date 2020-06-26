import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges, OnChanges } from '@angular/core';
import { Meeting } from '../../classes/meeting';
import { LanguageService } from "../../services/language.service";

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit, OnChanges {

  @Input() latestMeeting: Meeting[] = [];
  @Input() languageData = {};
  latest: any = "cheny";
  @Output() newMeeting = new EventEmitter<any>();

  constructor(public languageService: LanguageService ) { 
    
  }

  ngOnInit() {
    this.languageData = this.languageService.getLanguageData();
  }

  bookNew() {
    this.newMeeting.emit();
  }


  ngOnChanges(changes: SimpleChanges) {
    this.latestMeetingChanged(changes.latestMeeting.currentValue);
  }

  latestMeetingChanged(latestMeeting) {
    if(latestMeeting && latestMeeting.length){
      this.latestMeeting.sort(this.sortByDate);
      this.latestMeeting.sort(this.sortByTime);
      this.latest = latestMeeting[0];
    }
  }

  sortByDate(a, b){
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  }

  sortByTime(a, b){
    return new Date(a.startingHour).getTime() - new Date(b.startingHour).getTime();
  }


}
