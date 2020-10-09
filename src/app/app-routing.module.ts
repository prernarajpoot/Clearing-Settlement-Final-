import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CmTradebookComponent } from './cm-tradebook/cm-tradebook.component';
import { CmCorporateActionComponent } from './cm-corporate-action/cm-corporate-action.component'
import { CostSettlementReportComponent } from './cost-settlement-report/cost-settlement-report.component';
import { FundobligationComponent } from './fundobligation/fundobligation.component';
import { LoginComponent } from './login/login.component';
import { OverviewtableComponent } from './overviewtable/overviewtable.component';
import { StockobligationComponent } from './stockobligation/stockobligation.component';
import { TradebookComponent } from './tradebook/tradebook.component';
import { CmObligationComponent } from './cm-obligation/cm-obligation.component';
import { TradeAddComponent } from './trade-add/trade-add.component';
import { CmOverviewComponent } from './cm-overview/cm-overview.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent
}, {
  path: 'overview',
  component: OverviewtableComponent
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'tradebook',
  component: TradebookComponent
}, {
  path: 'stockOb',
  component: StockobligationComponent
}, {
  path: 'fundOb',
  component: FundobligationComponent
}, {
  path: 'csreport',
  component: CostSettlementReportComponent
}, {
  path: 'careport',
  component: CmCorporateActionComponent
}, {
  path: 'cm-obligations',
  component: CmObligationComponent
}, {
  path: 'csreport-after',
  component: CmTradebookComponent
}, {
  path: 'cm-tradebook',
  component: CmTradebookComponent
  
},{
  path: 'add-trade',
  component: TradeAddComponent
},{
  path: 'cm-overview',
  component: CmOverviewComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
