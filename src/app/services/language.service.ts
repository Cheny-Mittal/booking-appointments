import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  language = "English";

  getTimeZone() {
    const timezone = [
      { name: 'Argentina Time', time: '-3.00' },
      { name: 'Azores Summer Time', time: '+0.00' },
      { name: 'Indian Standard Time', time: '+5.30' }];
    return timezone;
  }

  getLanguage() {
    const language = ['English', 'हिन्दी'];
    return language;
  }

  changeLanguage(language){
    this.language = language;
    sessionStorage.setItem('language', language);
  }

  getLanguageData() {
    let languageDataEnglish = {
      latestHeading: 'Upcoming Appointment',
      latestNoAppointment: 'No Appointments Scheduled',
      bookNew: 'Book a New Appointment',
      with: 'With',
      when: 'When',
      to: 'to',
    };
    let languageDataHindi = {
      latestHeading: 'आगामी नियुक्ति',
      latestNoAppointment: 'कोई अपॉइंटमेंट अनुसूचित नहीं',
      bookNew: 'नई नियुक्ति बुक करें',
      with: 'साथ',
      when: 'कब',
      to: 'से',
    };
    return (this.language === "English") ? languageDataEnglish : languageDataHindi;
  }
}
