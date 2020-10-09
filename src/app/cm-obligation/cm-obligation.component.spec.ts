import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmObligationComponent } from './cm-obligation.component';

describe('CmObligationComponent', () => {
  let component: CmObligationComponent;
  let fixture: ComponentFixture<CmObligationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmObligationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmObligationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
