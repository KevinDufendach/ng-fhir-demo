import {Component, OnInit} from '@angular/core';
import {Patient} from '../patient';
import {PatientService} from '../patient.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];
  selectedPatient: Patient;

  constructor(private patientService: PatientService,
              private router: Router) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(patient: Patient): void {
    this.selectedPatient = patient;
  }

  getHeroes(): void {
    this.patientService.getPatients().then(patients => this.patients = patients);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedPatient.id]);
  }

}
