import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vaccine } from './vaccine.models';

@Component({
  selector: 'app-vaccine-add',
  templateUrl: './vaccine-add.component.html'
})
export class VaccineAddComponent {

  public vaccine: Vaccine;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    //http.get<Vaccine[]>(baseUrl + 'api/vaccines').subscribe(result => {
     // this.vaccines = result;
   // }, error => console.error(error));

    this.vaccine = <Vaccine>{};
  }

  public saveVaccine() {
    console.log("Start saving vaccine")

    this.http.post(this.baseUrl + 'api/vaccines', this.vaccine).subscribe(result => {
      console.log("Saving vaccine completed!");
    }, error => console.error(error))
  }
}




