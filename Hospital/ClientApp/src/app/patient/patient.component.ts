import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html'
})
export class PatientsComponent {
  public patients: Patient[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Patient[]>(baseUrl + 'api/patients').subscribe(result => {
      this.patients = result;
    }, error => console.error(error));
  }
}

interface Patient {
  ID: string;
  name: string;
  disease: string;
  vaccinated: string;
}
