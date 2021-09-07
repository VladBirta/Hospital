import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './patient.models';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html'
})
export class PatientsComponent {
  public patients: Patient[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    http.get<Patient[]>(baseUrl + 'api/patients').subscribe(result => {
      this.patients = result;
    }, error => console.error(error));
  }

   public deletePatient(patient: Patient) {
    console.log(patient);

    this.http.delete(this.baseUrl + 'api/patients/' + patient.id).subscribe(result => {

      this.http.get<Patient[]>(this.baseUrl + 'api/patients').subscribe(result => {
        this.patients = result;
      }, error => console.error(error));

    }, error => console.error(error));

  }
}
