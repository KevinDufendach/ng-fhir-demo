import {Component, Input} from '@angular/core';
import {Patient} from '../patient';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent {
  @Input() patient: Patient;
}
