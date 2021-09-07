import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from './doctor.models';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html'
})
export class DoctorsComponent {
  public doctors: Doctor[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Doctor[]>(baseUrl + 'api/doctors').subscribe(result => {
      this.doctors = result;
    }, error => console.error(error));
  }
}

