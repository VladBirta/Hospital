import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vaccine } from './vaccine.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vaccine-add',
  templateUrl: './vaccine-add.component.html'
})
export class VaccineAddComponent {


  public vaccine: Vaccine = <Vaccine>{};


  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) { }


  public saveVaccine() {
    console.log("Start saving doses");

    console.log(this.vaccine);

    this.http.post(this.baseUrl + 'api/vaccines', this.vaccine).subscribe(result => {
      console.log("Saving doses completed!")

      this.router.navigateByUrl("/vaccines");
    }, error => console.error(error))
  }
}

