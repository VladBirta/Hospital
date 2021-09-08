import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from './patient.models';


@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',

})
export class PatientUpdateComponent {

  public patient: Patient = <Patient>{};
  public param;

  ngOnInit() {
    this.routers.queryParams.subscribe(param => {
      this.param = param;
      this.loadPatient();
    });
  }
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string,
    private routers: ActivatedRoute, private router: Router) { }

  loadPatient() {
    this.http.get<Patient>(this.baseUrl + 'api/patients/' + this.param.id).subscribe(result => {
      this.patient = result;
    }, error => console.error(error));
  }

  public savePatient() {
    this.http.put(this.baseUrl + 'api/patients/' + this.patient.id, this.patient).subscribe(result => {
      this.router.navigateByUrl("/patients");
    }, error => console.error(error));
  }
}
