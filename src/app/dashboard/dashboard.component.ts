import { Component, OnInit } from '@angular/core';
import {PatientService} from '../patient.service';
import {Patient} from '../patient';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  patients: Patient[] = [];

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patientService.getPatients()
      .then(patients => this.patients = patients.slice(1, 5));
  }

}
