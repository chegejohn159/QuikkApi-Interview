import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  Base_Url: string=environment.Backend_Url

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any>{
    return this.http.post<any>(this.Base_Url+"users/login", credentials);
  }

  register(user_details: any): Observable<any>{
    return this.http.post<any>(this.Base_Url+"users/register", user_details);
  }

}
