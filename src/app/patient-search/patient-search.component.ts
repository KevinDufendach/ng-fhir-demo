import { Component, OnInit } from '@angular/core';

// Observable class extension
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {PatientSearchService} from '../patient-search.service';
import {Observable} from 'rxjs/Observable';
import {Patient} from '../patient';
import {Subject} from 'rxjs/Subject';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css'],
  providers: [PatientSearchService]
})
export class PatientSearchComponent implements OnInit {
  patients: Observable<Patient[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private patientSearchService: PatientSearchService,
    private router: Router
  ) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.patients = this.searchTerms
      .debounceTime(300)        // wait 300 ms after each keystroke before considering
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.patientSearchService.search(term)
        // or the observable of empty patients if there was no search term
        : Observable.of<Patient[]>([])
          .catch(error => {
            // TODO: Add real error handling
            console.log(error);
            return Observable.of<Patient[]>([]);
          })
      );
  }

  gotoDetail(patient: Patient): void {
    const link = ['/detail', patient.id];
    this.router.navigate(link);
  }
}
