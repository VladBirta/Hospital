import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from './doctor.models';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html'
})
export class DoctorsComponent {
  public doctors: Doctor[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    http.get<Doctor[]>(baseUrl + 'api/doctors').subscribe(result => {
      this.doctors = result;
    }, error => console.error(error));
  }

  public deleteDoctor(doctor: Doctor) {
    console.log(doctor);

    this.http.delete(this.baseUrl + 'api/doctors/' + doctor.id).subscribe(result => {

      this.http.get<Doctor[]>(this.baseUrl + 'api/doctors').subscribe(result => {
        this.doctors = result;
      }, error => console.error(error));

    }, error => console.error(error));


       
  }
}

