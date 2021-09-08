import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from './doctor.models';


@Component({
  selector: 'app-doctor-update',
  templateUrl: './doctor-update.component.html',
  
})
export class DoctorUpdateComponent {

  public doctor: Doctor = <Doctor>{};
  public param;

  ngOnInit() {
    this.routers.queryParams.subscribe(param => {
      this.param = param;
      this.loadDoctor();
    });
  }
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string,
    private routers: ActivatedRoute, private router: Router) { }

  loadDoctor() {
    this.http.get<Doctor>(this.baseUrl + 'api/doctors/' + this.param.id).subscribe(result => {
      this.doctor = result;
    }, error => console.error(error));
  }

  public saveDoctor() {
    this.http.put(this.baseUrl + 'api/doctors/' + this.doctor.id, this.doctor).subscribe(result => {
      this.router.navigateByUrl("/doctors");
    }, error => console.error(error));
  }
}
