import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from './doctor.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html'
})
export class DoctorAddComponent {
 

  public doctor: Doctor = <Doctor>{};


  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) { }


    public saveDoctor() {
      console.log("Start saving doctor");

      console.log(this.doctor);

      this.http.post(this.baseUrl + 'api/doctors', this.doctor).subscribe(result => {
        console.log("Saving doctor completed!")

        this.router.navigateByUrl("/doctors");
      }, error => console.error(error))
  }
}


