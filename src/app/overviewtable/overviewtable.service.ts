import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CashInterestRateCard, InterestRates, OpeningBalance, TradeVolumeCard } from './overviewtable.component';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class OverviewtableService {


  constructor(private cookieService: CookieService, private http: HttpClient) { }
  getOpeningBalance(): Observable<OpeningBalance[]> {
    const params = new HttpParams().set('token', this.cookieService.get("token"));
    return this.http.get<OpeningBalance[]>('http://localhost:8888/api/opening-balance', { params });
  }
  getInterestRates(): Observable<InterestRates[]> {
    const params = new HttpParams().set('token', this.cookieService.get("token"));
    return this.http.get<InterestRates[]>('http://localhost:8888/api/stock-borrowing-rate', { params });
  }
  getTradeVolume(): Observable<TradeVolumeCard[]> {
    const params = new HttpParams().set('token', this.cookieService.get("token"));
    return this.http.get<TradeVolumeCard[]>('http://localhost:8888/api/trade-volume', { params });
  }
  getCashInterestRate(): Observable<CashInterestRateCard[]> {
    const params = new HttpParams().set('token', this.cookieService.get("token"));
    return this.http.get<CashInterestRateCard[]>('http://localhost:8888/api/interest-rate', { params });
  }
  //TODO

}
