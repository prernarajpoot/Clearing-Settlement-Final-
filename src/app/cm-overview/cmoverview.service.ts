import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CashInterestRateCard, InterestRates, OpeningBalance, TradeVolumeCard } from './cm-overview.component';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CmoverviewService {

  constructor(private cookieService: CookieService, private http: HttpClient) { }
  getOpeningBalance(): Observable<OpeningBalance[]> {
    const params = new HttpParams().set('token', this.cookieService.get("token"));
    return this.http.get<OpeningBalance[]>('http://localhost:8888/api/cm-opening-balance', { params });
  }
  getInterestRates(): Observable<InterestRates[]> {
    const params = new HttpParams().set('token', this.cookieService.get("token"));
    return this.http.get<InterestRates[]>('http://localhost:8888/api/cm-stock-borrowing-rate', { params });
  }
  getTradeVolume(): Observable<TradeVolumeCard[]> {
    const params = new HttpParams().set('token', this.cookieService.get("token"));
    return this.http.get<TradeVolumeCard[]>('http://localhost:8888/api/cm-trade-volume', { params });
  }
  getCashInterestRate(): Observable<CashInterestRateCard[]> {
    const params = new HttpParams().set('token', this.cookieService.get("token"));
    return this.http.get<CashInterestRateCard[]>('http://localhost:8888/api/cm-interest-rate', { params });
  }
  //TODO
}
