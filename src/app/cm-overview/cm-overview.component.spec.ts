import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmOverviewComponent } from './cm-overview.component';

describe('CmOverviewComponent', () => {
  let component: CmOverviewComponent;
  let fixture: ComponentFixture<CmOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
