import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CostSettlementReportComponent } from './cost-settlement-report/cost-settlement-report.component';
import { MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { OverviewtableComponent } from './overviewtable/overviewtable.component';
import { MatTableModule } from '@angular/material/table';
import { TradebookComponent } from './tradebook/tradebook.component';
import { CmTradebookComponent } from './cm-tradebook/cm-tradebook.component';
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StockobligationComponent } from './stockobligation/stockobligation.component';
import { FundobligationComponent } from './fundobligation/fundobligation.component';
import { HttpClientModule} from '@angular/common/http';
import { CmObligationComponent } from './cm-obligation/cm-obligation.component';
import { FundserviceService } from './fundobligation/fundservice.service';
import { MatDialogModule } from '@angular/material/dialog'
import { CmCorporateActionComponent } from './cm-corporate-action/cm-corporate-action.component';
import { CmOverviewComponent } from './cm-overview/cm-overview.component'
import {TradeAddComponent} from './trade-add/trade-add.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { HighchartsChartComponent, HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CostSettlementReportComponent,
    StockobligationComponent,
    FundobligationComponent,
    OverviewtableComponent,
    LoginComponent,
    CmObligationComponent,
    TradebookComponent,
    CmTradebookComponent,
    LoginComponent,
    CmCorporateActionComponent,
    CmOverviewComponent,
    TradeAddComponent,
    CmOverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatCheckboxModule,
    MatTabsModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    HighchartsChartModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [FundserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
