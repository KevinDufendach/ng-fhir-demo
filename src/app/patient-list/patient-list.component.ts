import { Component, OnInit } from '@angular/core';
import {Patient} from '../patient';
import {PatientService} from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];
  selectedPatient: Patient;

  constructor(private patientService: PatientService) {}

  onSelect(patient: Patient): void {
    this.selectedPatient = patient;
  }

  getHeroes(): void {
    this.patientService.getPatients().then(patients => this.patients = patients);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
