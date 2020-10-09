import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TradeAddComponent, TradeData} from './trade-add.component'
import {CookieService} from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
// interface session{
//   token:string,
// }
export class TradeAddService {

  constructor(private cookieService: CookieService,private _http: HttpClient) { }


  postTrade(Data: TradeData) {
    // console.log(Data);
     let params = new HttpParams();
     
     params = params.append('token', this.cookieService.get("token"));
     params = params.append('bcm_id', Data.bcm_id);
     params = params.append('scm_id', Data.scm_id);
     params = params.append('stock_id', Data.stock_id);
     params = params.append('price', Data.price + "");
     params = params.append('qty', Data.qty + "") ;
     
    // session_id: session ={};
    
    console.log(Data);
    // console.log(this._http.post<any>('http://localhost:8888/api/add-trade/',Data));
     return this._http.post<TradeData>('http://localhost:8888/api/add-trade', params);

  }
}

