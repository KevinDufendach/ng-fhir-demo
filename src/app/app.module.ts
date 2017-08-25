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


@NgModule({
  declarations: [
    AppComponent,
    PatientDetailComponent,
    PatientListComponent,
    DashboardComponent
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

