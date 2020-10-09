import { Component, OnInit } from '@angular/core';
import { CmobligationService } from './cmobligation.service';
export interface cmStockObligation{
  name: string;
  google: number;
  amazon: number;
  apple: number;
  netflix: number;
  facebook: number;
}
export interface cmFundObligation{
 fund: number;
}
@Component({
  selector: 'app-cm-obligation',
  templateUrl: './cm-obligation.component.html',
  styleUrls: ['./cm-obligation.component.css']
})

export class CmObligationComponent implements OnInit {
  displayedStockObligationColumns: string[] = ['name', 'google','amazon','apple','netflix','facebook'];
  displayedFundObligationColumns: string[] = ['fund'];
  public getStock=[];
  public getFund=[];
  constructor(private _httpService: CmobligationService) { }

  ngOnInit(): void {
    this._httpService.getCMStockObligation().subscribe(data => this.getStock = data);
    this._httpService.getCMFundObligation().subscribe(data => this.getFund = data);
  }


}
