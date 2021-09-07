import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vaccine } from './vaccine.models';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html'
})
export class VaccinesComponent {
  public vaccines: Vaccine[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    http.get<Vaccine[]>(baseUrl + 'api/vaccines').subscribe(result => {
      this.vaccines = result;
    }, error => console.error(error));
  }

     public deleteVaccine(vaccine: Vaccine) {
    console.log(vaccine);

    this.http.delete(this.baseUrl + 'api/vaccines/' + vaccine.id).subscribe(result => {

      this.http.get<Vaccine[]>(this.baseUrl + 'api/vaccines').subscribe(result => {
        this.vaccines = result;
      }, error => console.error(error));

    }, error => console.error(error));
  }
}

