import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './patient.models';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html'
})
export class PatientAddComponent {

  public patient: Patient;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    //http.get<Patient[]>(baseUrl + 'api/patients').subscribe(result => {
      //this.patients = result;
    //}, error => console.error(error));

    this.patient = <Patient>{};

  }
  public savePatient() {
    console.log("Start saving patient")

    this.http.post(this.baseUrl + 'api/patients', this.patient).subscribe(result => {
      console.log("Saving patient completed!");
    }, error => console.error(error))
  }
}

