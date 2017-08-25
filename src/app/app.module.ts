import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientService } from './patient.service';
import { PatientListComponent } from './patient-list/patient-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './route/app-routing.module';

// // Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';

import { InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpModule} from '@angular/http';
import {InMemoryDataService} from './in-memory-data.service';
import { PatientSearchComponent } from './patient-search/patient-search.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientDetailComponent,
    PatientListComponent,
    DashboardComponent,
    PatientSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
],
  providers: [ PatientService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

