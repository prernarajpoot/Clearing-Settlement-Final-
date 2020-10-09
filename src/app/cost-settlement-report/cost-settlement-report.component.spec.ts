import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostSettlementReportComponent } from './cost-settlement-report.component';

describe('CostSettlementReportComponent', () => {
  let component: CostSettlementReportComponent;
  let fixture: ComponentFixture<CostSettlementReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostSettlementReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostSettlementReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
