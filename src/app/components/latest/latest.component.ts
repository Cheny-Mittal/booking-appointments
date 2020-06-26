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
  latest: any = "cheny";
  @Output() newMeeting = new EventEmitter<any>();
  languageData: {};

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
    this.latest = latestMeeting && latestMeeting.length ? latestMeeting[latestMeeting.length - 1] : '';
  }


}
