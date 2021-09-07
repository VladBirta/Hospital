import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from './doctor.models';

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html'
})
export class DoctorAddComponent {
 // public doctors: Doctor[];

  public doctor: Doctor;


  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    //Asta incarca tot in pagina

    // http.get<Doctor[]>(baseUrl + 'api/doctors').subscribe(result => {
    //  this.doctors = result;
    // }, error => console.error(error));

    this.doctor = <Doctor>{}
  }
    public saveDoctor() {
      console.log("Start saving doctor")

      this.http.post(this.baseUrl + 'api/doctors', this.doctor).subscribe(result => {
        console.log("Saving doctor completed!")
      }, error => console.error(error))
  }
}


