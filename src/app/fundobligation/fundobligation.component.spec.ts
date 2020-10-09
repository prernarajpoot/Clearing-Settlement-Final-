import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundobligationComponent } from './fundobligation.component';

describe('FundobligationComponent', () => {
  let component: FundobligationComponent;
  let fixture: ComponentFixture<FundobligationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundobligationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundobligationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
