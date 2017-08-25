import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Patient} from './patient';

@Injectable()
export class PatientSearchService {

  constructor(private http: Http) { }

  search (term: string): Observable<Patient[]> {
    return this.http
      .get(`api/patients/?name=${term}`)
      .map(response => response.json().data as Patient[]);
  }
}
