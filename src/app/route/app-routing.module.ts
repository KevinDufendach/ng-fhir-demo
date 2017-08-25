import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PatientListComponent} from '../patient-list/patient-list.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {PatientDetailComponent} from '../patient-detail/patient-detail.component';

// ng generate module route --routing --module=app.module


const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'patients',
    component: PatientListComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: PatientDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
