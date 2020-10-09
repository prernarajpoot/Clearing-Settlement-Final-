import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
import { StockObligation} from './stockobligation.component';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class StockserviceService {

  constructor(private cookieService: CookieService,private http: HttpClient) { }
  getStock():Observable<StockObligation[]>{
    const params = new HttpParams().set('token', this.cookieService.get("token"));
    return this.http.get<StockObligation[]>('http://localhost:8888/api/stock-obligation', {params});
  }
}
