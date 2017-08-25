import { Injectable } from '@angular/core';
import {Patient} from './patient';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PatientService {
  private patientsUrl = 'api/patients'; // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});

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

  update(patient: Patient): Promise<Patient> {
    const url = `${this.patientsUrl}/${patient.id}`;

    return this.http
      .put(url, JSON.stringify(patient), {headers: this.headers})
      .toPromise()
      .then(() => patient)
      .catch(this.handleError);
  }

  create(name: string): Promise<Patient> {
    return this.http
      .post(this.patientsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Patient)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.patientsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
