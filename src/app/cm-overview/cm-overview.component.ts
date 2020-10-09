import { Component, OnInit } from '@angular/core';
import { CmoverviewService } from './cmoverview.service';


export interface TradeVolumeCard{
  trade_volume: number;
}
export interface CashInterestRateCard{
  interest_rate: number;

}
export interface OpeningBalance {
  clearingMemberName: string;
  // cashBalance: number;
  cash : number;
  apple: number;
  google: number;
  facebook:number;
  amazon:number;
  netflix: number;

}

export interface InterestRates{
 stock: string;
 borrowingcost: number;
}
@Component({
  selector: 'app-cm-overview',
  templateUrl: './cm-overview.component.html',
  styleUrls: ['./cm-overview.component.css']
})
export class CmOverviewComponent implements OnInit {

  displayedColumnsOne: string[] = ['clearingMemberName','cash','apple','google','facebook','amazon','netflix' ];


  // dataSourceTwo: MatTableDataSource<InterestRates>;
  displayedColumnsTwo: string[] = ['stock', 'borrowingcost'];

  displayedColumnCashInterestCard: string[]= ['interest_rate'];
  displayedColumnTradeVolumeCard: string[]= ['trade_volume'];

//interest_rate
  // }
  public getBalance=[] //obs
  public getRates=[]
  public getCashRate=[]
  public getTradeVolume=[]
  public today= new Date()
  constructor(private _httpService: CmoverviewService) { }
  ngOnInit(): void {
    
    this._httpService.getOpeningBalance().subscribe(data => this.getBalance = data);
    this._httpService.getInterestRates().subscribe(data => this.getRates = data);
    this._httpService.getCashInterestRate().subscribe(data => this.getCashRate = data);
    this._httpService.getTradeVolume().subscribe(data => this.getTradeVolume = data);
  }

}
