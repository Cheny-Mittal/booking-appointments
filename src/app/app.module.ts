import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllMeetingsComponent } from './components/all-meetings/all-meetings.component';
import { BookNewComponent } from './components/book-new/book-new.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LatestComponent } from './components/latest/latest.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilFunctions } from './config/util';

@NgModule({
  declarations: [
    AppComponent,
    AllMeetingsComponent,
    BookNewComponent,
    HomepageComponent,
    LatestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UtilFunctions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
