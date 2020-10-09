import { Component, OnInit } from '@angular/core';
import { FundserviceService } from './fundservice.service';


export interface FundObligation {
  clearingMemberName: string;
  fundObligationAmount: number;
}

@Component({
  selector: 'app-fundobligation',
  templateUrl: './fundobligation.component.html',
  styleUrls: ['./fundobligation.component.css']
})
export class FundobligationComponent implements OnInit {
  displayedColumns: string[] = ['clearingMemberName', 'fundObligationAmount'];
  public getData = [];
  constructor(private _httpService: FundserviceService) { }
  ngOnInit(): void {
    this._httpService.getFund().subscribe(data => this.getData = data);  
  }
}
