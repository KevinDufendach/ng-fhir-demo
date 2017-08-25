import { Injectable } from '@angular/core';
import {Patient} from './patient';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PatientService {
  private patientsUrl = 'api/patients'; // URL to web API

  constructor(private http: Http) { }

  getPatients(): Promise<Patient[]> {
    return this.http
      .get(this.patientsUrl)
      .toPromise()
      .then(response => response.json().data as Patient[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred in PatientService.getPatients: ', error);
    return Promise.reject(error.message || error);
  }

  getPatient(id: number): Promise<Patient> {
    const url = `${this.patientsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Patient)
      .catch(this.handleError);
  }
}
