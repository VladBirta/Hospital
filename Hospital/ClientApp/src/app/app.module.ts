import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { DoctorsComponent } from './doctor/doctor.component';
import { PatientsComponent } from './patient/patient.component';
import { VaccinesComponent } from './vaccine/vaccine.component';
import { DoctorAddComponent } from './doctor/doctor-add.component';
import { PatientAddComponent } from './patient/patient-add.component';
import { VaccineAddComponent } from './vaccine/vaccine-add.component';
import { DoctorUpdateComponent } from './doctor/doctor-update.component';
import { PatientUpdateComponent } from './patient/patient-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    DoctorsComponent,
    DoctorAddComponent,
    PatientsComponent,
    VaccinesComponent,
    PatientAddComponent,
    VaccineAddComponent,
    DoctorUpdateComponent,
    PatientUpdateComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'counter', component: CounterComponent },
    { path: 'fetch-data', component: FetchDataComponent },
    { path: 'doctors', component: DoctorsComponent },
    { path: 'doctor-add', component: DoctorAddComponent },
    { path: 'patients', component: PatientsComponent },
    { path: 'vaccines', component: VaccinesComponent },
    { path: 'patient-add', component: PatientAddComponent },
    { path: 'vaccine-add', component: VaccineAddComponent },
    { path: 'doctor-update', component: DoctorUpdateComponent },
    { path: 'patient-update', component: PatientUpdateComponent },
], { relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
