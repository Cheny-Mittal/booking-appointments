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
      allMeetings: 'All Meetings',
      fullName: 'Full Name',
      meetingDate: 'Meeting Date',
      startTime: 'Start Time',
      endTime: 'End Time',
      schedule: 'Schedule the meeting',
      enterName: 'Enter Name',
      chooseDate: 'Choose a Date'
    };
    let languageDataHindi = {
      latestHeading: 'आगामी नियुक्ति',
      latestNoAppointment: 'कोई अपॉइंटमेंट अनुसूचित नहीं',
      bookNew: 'नई नियुक्ति बुक करें',
      with: 'किसके साथ',
      when: 'कब',
      to: 'से',
      allMeetings: 'सभी नियुक्ति',
      fullName: 'पूरा नाम',
      meetingDate: 'मिलने की तारीख',
      startTime: 'प्रारम्भ का समय',
      endTime: 'अंतिम समय',
      schedule: 'मीटिंग शेड्यूल करें',
      enterName: 'कृपया नाम दर्ज करें',
      chooseDate: 'एक तिथि चुनें'
    };
    return (this.language === "English") ? languageDataEnglish : languageDataHindi;
  }
}
