import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import { CmTradebookComponent } from './cm-tradebook.component';
import { CookieService } from 'ngx-cookie-service'; 

@Injectable({
  providedIn: 'root'
})
export class CmTradebookService {
  constructor(private cookieService: CookieService, private http:HttpClient){} 
  getCmTradebook():Observable<CmTradebookComponent[]> {
    const params = new HttpParams().set('token', this.cookieService.get("token"));
    return this.http.get<CmTradebookComponent[]>( "http://localhost:8888/api/cm-tradebook", {params});
  }
}
