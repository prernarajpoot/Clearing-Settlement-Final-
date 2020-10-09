import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FundObligation } from './fundobligation.component';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class FundserviceService {
  constructor(private cookieService: CookieService, private http: HttpClient) { }
  getFund(): Observable<FundObligation[]> {
    const params = new HttpParams().set('token', this.cookieService.get("token"));
    return this.http.get<FundObligation[]>('http://localhost:8888/api/fund-obligation', {params});
  }
}
