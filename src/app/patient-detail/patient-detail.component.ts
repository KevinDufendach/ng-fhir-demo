import {Component, Input, OnInit} from '@angular/core';
import {Patient} from '../patient';
import {PatientService} from '../patient.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  @Input() patient: Patient;

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.patientService.getPatient(+params.get('id')))
      .subscribe(patient => this.patient = patient);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.patientService.update(this.patient)
      .then(() => this.goBack());
  }

}
