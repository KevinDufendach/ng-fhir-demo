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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.patientService.create(name)
      .then(patient => {
        this.patients.push(patient);
        this.selectedPatient = null;
      });
  }

  delete(patient: Patient): void {
    this.patientService
      .delete(patient.id)
      .then(() => {
        this.patients = this.patients.filter(pt => pt !== patient);
        if (this.selectedPatient === patient) {
          this.selectedPatient = null;
        }
      });
  }

}
