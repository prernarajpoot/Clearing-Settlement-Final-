import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmCorporateActionComponent } from './cm-corporate-action.component';

describe('CmCorporateActionComponent', () => {
  let component: CmCorporateActionComponent;
  let fixture: ComponentFixture<CmCorporateActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmCorporateActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmCorporateActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
