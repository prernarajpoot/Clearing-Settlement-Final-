import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router'; 
import { CmTradebookService } from './cm-tradebook.service';
import { HighchartsChartComponent } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { any } from '@uirouter/core';
export interface CMTrades {
  stockName: string;
  tradeID: number;
  price: number;
  cmName: string;
  orderType: string;
  quantity: number;
  tradeValue: number;
}

@Component({
  selector: 'app-cm-tradebook',
  templateUrl: './cm-tradebook.component.html',
  styleUrls: ['./cm-tradebook.component.css']
})
export class CmTradebookComponent implements OnInit {
  displayedColumns: string[] = ['tradeID', 'orderType','stockName', 'price', 'quantity','tradeValue'];
  public getData = []; 
  constructor(private router: Router, private _httpService: CmTradebookService, private cookieService: CookieService ) { }
  ngOnInit(): void {
    console.log(this.cookieService.get("token"));
    this.router.navigate(['/cm-tradebook']);
    this._httpService.getCmTradebook().subscribe(data => this.getData = data);
    // this.loginID = (this.activatedRoute.snapshot.params.cmid);
    setTimeout(() => {
      let total = this.getData.length;
      let amazon = 0;
      let apple = 0;
      let google = 0;
      let netflix = 0;
      let facebook = 0;
      this.getData.forEach(element => {
        if(element.stockName == "Amazon"){
          amazon++;
        }
        if(element.stockName == "Apple"){
          apple++;
        }
        if(element.stockName == "Google"){
          google++;
        }
        if(element.stockName == "Netfilx"){
          netflix++;
        }
        if(element.stockName == "Facebook"){
          facebook++;
        }
      });

      console.log(amazon);
      console.log(apple);
      console.log(facebook);
      console.log(netflix);
      console.log(google);

      Highcharts.chart('pieChart', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Stocks traded'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
          }
        },
        series: [{
          name: 'Brands',
          colorByPoint: true,
          type: undefined,
          data: [{
            name: 'Apple',
            y: apple/total,
            sliced: true
          }, {
            name: 'Google',
            y: google/total,
          }, {
            name: 'Netflix',
            y: netflix/total,
          }, {
            name: 'Amazon',
            y: amazon/total,
          }, {
            name: 'Facebook',
            y: facebook/total,
          }]
        }]
      });
  }, 5000);
}


}
