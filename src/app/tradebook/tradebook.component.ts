import { Component, OnInit } from '@angular/core';
import { TradebookService } from './tradebook.service';

export interface Trades {
  stockName: string;
  tradeID: number;
  price: number;
  buyerName: string;
  sellerName: string;
  quantity: number;
  tradeValue: number;
}

@Component({
  selector: 'app-tradebook',
  templateUrl: './tradebook.component.html',
  styleUrls: ['./tradebook.component.css']
})
export class TradebookComponent {
  displayedColumns: string[] = ['tradeID', 'buyerName', 'sellerName','stockName', 'price', 'quantity','tradeValue'];
  public getData = []; 
  constructor(private _httpService: TradebookService ) { }
  ngOnInit(): void {
    this._httpService.getTradebook().subscribe(data => this.getData = data);

}
}
