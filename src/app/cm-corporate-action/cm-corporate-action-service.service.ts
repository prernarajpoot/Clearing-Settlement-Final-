import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CorporateAction} from './cm-corporate-action.component';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service'; 


@Injectable({
  providedIn: 'root'
})
export class CmCorporateActionServiceService {

  constructor(private cookieService: CookieService,private http: HttpClient) { }
  getCorporateAction():Observable<CorporateAction[]>{
    const params = new HttpParams().set('token', this.cookieService.get("token"));
    return this.http.get<CorporateAction[]>( "http://localhost:8888/api/cm-corporate-action-report", {params});
  }
}


    
