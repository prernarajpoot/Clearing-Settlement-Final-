
import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { OverviewtableService } from './overviewtable.service';


/**
 * @title Table with pagination
 */
export interface TradeVolumeCard{
  TradeVolume: number;
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
  selector: 'app-overviewtable',
  templateUrl: './overviewtable.component.html',
  styleUrls: ['./overviewtable.component.css']
})
export class OverviewtableComponent implements OnInit{

  // dataSourceOne: MatTableDataSource<OpeningBalance>;
  displayedColumnsOne: string[] = ['clearingMemberName','cash','apple','google','facebook','amazon','netflix' ];


  // dataSourceTwo: MatTableDataSource<InterestRates>;
  displayedColumnsTwo: string[] = ['stock', 'borrowingcost'];

  displayedColumnCashInterestCard: string[]= ['interest_rate'];
  displayedColumnTradeVolumeCard: string[]= ['TradeVolume'];

//interest_rate
  // }
  public getBalance=[] //obs
  public getRates=[]
  public getCashRate=[]
  public getTradeVolume=[]
  public today= new Date()
  constructor(private _httpService: OverviewtableService) { }
  ngOnInit(): void {
    
    this._httpService.getOpeningBalance().subscribe(data => this.getBalance = data);
    this._httpService.getInterestRates().subscribe(data => this.getRates = data);
    this._httpService.getCashInterestRate().subscribe(data => this.getCashRate = data);
    this._httpService.getTradeVolume().subscribe(data => this.getTradeVolume = data);
    
  
}}
