import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CostSettlementReport } from './cost-settlement-report.component';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CostSettlementServiceService {
  constructor(private cookieService: CookieService,private http: HttpClient) { }
  getCostSettlement(): Observable<CostSettlementReport[]> {
    const params = new HttpParams().set('token', this.cookieService.get("token"));
    return this.http.get<CostSettlementReport[]>('http://localhost:8888/api/cm-cost-of-settlement', {params});
  }
}
