import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

  //registerUser(user: any): Observable<any> {
    //return this.http.post(this.baseUrl + 'api/users/', user);
  //}

}
