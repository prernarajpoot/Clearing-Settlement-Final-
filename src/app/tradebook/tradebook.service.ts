import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TradebookComponent } from './tradebook.component';
import {Observable} from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TradebookService {
  constructor(private cookieService: CookieService,private http:HttpClient){} 
  getTradebook():Observable<TradebookComponent[]> {
    const params = new HttpParams().set('token', this.cookieService.get("token"));
    return this.http.get<TradebookComponent[]>('http://localhost:8888/api/tradebook', {params})
  }
}