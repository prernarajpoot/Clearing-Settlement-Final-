import { Component, OnInit } from '@angular/core';
import { StockserviceService } from './stockservice.service';

export interface StockObligation {
  name: string;
  google: number;
  amazon: number;
  apple: number;
  netflix: number;
  facebook: number;
}
@Component({
  selector: 'app-stockobligation',
  templateUrl: './stockobligation.component.html',
  styleUrls: ['./stockobligation.component.css']
})
export class StockobligationComponent implements OnInit {displayedColumns: string[] = ['name', 'google','amazon','apple','netflix','facebook'];

public getData=[]
constructor(private _httpService: StockserviceService) { }
ngOnInit(): void {
  this._httpService.getStock().subscribe(data => this.getData = data);
}
}

