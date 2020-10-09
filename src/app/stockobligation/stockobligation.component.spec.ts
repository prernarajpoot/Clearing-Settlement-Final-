import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockobligationComponent } from './stockobligation.component';

describe('StockobligationComponent', () => {
  let component: StockobligationComponent;
  let fixture: ComponentFixture<StockobligationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockobligationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockobligationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
