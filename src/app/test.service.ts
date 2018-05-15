import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  }),
};
@Injectable()
export class TestService {
  private ShareData;
  constructor(private http: HttpClient, private route: Router) {}
  data() {
     return this.http.get('http://localhost:8080/', {responseType: 'json'});
  }

  profile(id: String) {
    return this.http.get('http://localhost:8080/db/' + id, {responseType: 'json'});
 }

  add_record(r: Contact) {
   this.http.post('http://localhost:8080/contact', r , httpOptions).subscribe(
     res => {
       this.setData(res);
       this.route.navigate(['/submited']);
     },
     err => { alert('Sorry The Server is under mantaince now pleas try leater');
              this.route.navigate(['']);
            }
   );
  }

  setData(data) {
    this.ShareData = data;
  }

  getData() {
    return this.ShareData;
  }

}
