import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cmStockObligation, cmFundObligation } from './cm-obligation.component';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CmobligationService {

  constructor(private cookieService: CookieService, private http: HttpClient) { }
  getCMStockObligation(): Observable<cmStockObligation[]> {
    const params = new HttpParams().set('token', this.cookieService.get("token"));
    return this.http.get<cmStockObligation[]>('http://localhost:8888/api/cm-stock-obligation', { params });
  }
  getCMFundObligation(): Observable<cmFundObligation[]> {
    const params = new HttpParams().set('token', this.cookieService.get("token"));
    return this.http.get<cmFundObligation[]>('http://localhost:8888/api/cm-fund-obligation', { params });
  }

}
