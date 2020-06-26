import { Component, OnInit } from '@angular/core';
import { AllMeetingsComponent } from '../all-meetings/all-meetings.component';
import * as SecureLS from 'secure-ls'
import { LanguageService } from "../../services/language.service";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  bookNew : boolean = false;
  allBookings: [];
  ls = new SecureLS({ encodingType: 'aes' });
  languageData: {};

  constructor(public languageService: LanguageService ) { 
    this.allBookings = this.ls.get('bookingForm');
  }

  ngOnInit() {
    this.languageData = this.languageService.getLanguageData();
  }

  changeBookings(value){
    this.bookNew = false;
    this.allBookings = value;
  }

}
