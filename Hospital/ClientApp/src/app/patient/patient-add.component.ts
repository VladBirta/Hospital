import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './patient.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html'
})
export class PatientAddComponent {


  public patient: Patient = <Patient>{};


  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) { }


  public savePatient() {
    console.log("Start saving patient");

    console.log(this.patient);

    this.http.post(this.baseUrl + 'api/patients', this.patient).subscribe(result => {
      console.log("Saving patient completed!")

      this.router.navigateByUrl("/patients");
    }, error => console.error(error))
  }
}
