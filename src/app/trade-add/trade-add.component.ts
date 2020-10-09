import { Component, OnInit } from '@angular/core';
import { TradeAddService} from './trade-add.service'
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

// import {MatFieldModule} from '@angular/material/form-field'

interface Stock {
  value: string;
  viewValue: string;
}
interface CMname {
  value: string;
  viewValue: string;
}
 
export class TradeData {
  constructor(
  bcm_id: string,
  scm_id: string,
  stock_id: string,
  price: number,
  qty: number,) {}
  bcm_id: string;
  scm_id: string;
  stock_id: string;
  price: number;
  qty: number;

}


@Component({
  selector: 'app-trade-add',
  templateUrl: './trade-add.component.html',
  styleUrls: ['./trade-add.component.css']
})
export class TradeAddComponent {
  // selected: "option1"
  // selectedStock: string;
  // selectedBuyerName: string;
  // selectedSellerName: string; 

 stocks: Stock[] = [
   {value: '1', viewValue: 'Apple'},
   {value: '5', viewValue: 'Google'},
   {value: '2', viewValue: 'Facebook'},
   {value: '4', viewValue: 'Amazon'},
   {value: '3', viewValue: 'Netflix'},
 ];

  cmNames: CMname[] = [
   {value: '1', viewValue: 'Citi'},
   {value: '3', viewValue: 'Goldman Sachs'},
   {value: '5', viewValue: 'Deutsche Bank'},
   {value: '2', viewValue: 'JP Morgan'},
   {value: '4', viewValue: 'Morgan Stanley'},
 ];

 constructor(private router: Router, private _httpService: TradeAddService) { }

 postTradeData = new TradeData("gs","apple","Apple",5,100,); 

 onSubmit(add: NgForm): void {
  //  console.log(this.postTradeData)
    this._httpService.postTrade(this.postTradeData).subscribe(
      data => alert("Trade added successfully"),
      error => console.error("Error",error)
    );  
    add.reset();
 }
}
