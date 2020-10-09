import { Component, OnInit } from '@angular/core';
import { CostSettlementServiceService } from './cost-settlement-service.service';


export interface CostSettlementReport {
  openingBalance: number;
  dailyObligation: number;
  costOfFunds: number;
  costOfSecurities: number;
  total: number;
}

@Component({
  selector: 'app-cost-settlement-report',
  templateUrl: './cost-settlement-report.component.html',
  styleUrls: ['./cost-settlement-report.component.css']
})
export class CostSettlementReportComponent implements OnInit {
  displayedColumns: string[] = ['openingBalance', 'dailyObligation', 'costOfFunds', 'costOfSecurities','total'];
  public getData =[];
  // public dataArr;
  constructor(private _httpService: CostSettlementServiceService) { }

  ngOnInit(): void {
    this._httpService.getCostSettlement().subscribe(data => this.getData =data);
    // this.dataArr = new Array(this.getData);
  }
}
