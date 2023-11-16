import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyAccountService {
  Base_Url: string=environment.Backend_Url

  constructor(private http: HttpClient) { }

  top_up(topup_details: any): Observable<any>{
    return this.http.post<any>(this.Base_Url+"account/top-up", topup_details);
  }

  send_money(send_money_details: any): Observable<any>{
    return this.http.post<any>(this.Base_Url+"account/send-money", send_money_details);
  }
}
