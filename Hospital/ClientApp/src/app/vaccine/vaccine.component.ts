import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vaccine } from './vaccine.models';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html'
})
export class VaccinesComponent {
  public vaccines: Vaccine[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Vaccine[]>(baseUrl + 'api/vaccines').subscribe(result => {
      this.vaccines = result;
    }, error => console.error(error));
  }
}

