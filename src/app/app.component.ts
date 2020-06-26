import { Component, OnInit } from '@angular/core';
import { TimeZone } from './classes/timezone';
import { LanguageService } from "./services/language.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'booking-appointments';
  languages;
  timeZones: TimeZone[];
  selectedTimeZone = "";
  selectedLanguage = "";

  constructor( public languageService : LanguageService) {
    this.languages = this.languageService.getLanguage();
    this.timeZones = this.languageService.getTimeZone();
  }

  ngOnInit() {
    let lan = sessionStorage.getItem('language');
    let zone = sessionStorage.getItem('timeZone');

    if (lan !== 'undefined' && lan !== null) {
      this.selectedLanguage = lan;
    } else {
      this.selectedLanguage = this.languages[0];
    }
    this.languageService.changeLanguage(this.selectedLanguage);

    if (zone !== 'undefined' && zone !== null) {
      this.selectedTimeZone = zone;
    } else {
      this.selectedTimeZone = this.timeZones[0].name;
      sessionStorage.setItem('timeZone', this.selectedTimeZone);
    }
  }

  zoneChanged(zone) {
    this.selectedTimeZone = zone.name;
    sessionStorage.setItem('timeZone', zone);
    location.reload();
  }

  lanChanged(lan) {
    this.selectedLanguage = lan;
    this.languageService.changeLanguage(lan);
    location.reload();
  }
}
