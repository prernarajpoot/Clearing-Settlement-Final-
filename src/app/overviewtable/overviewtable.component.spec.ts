import { ComponentFixture, TestBed } from '@angular/core/testing';
//import { NavbarComponent } from './navbar/navbar.component';

import { OverviewtableComponent } from './overviewtable.component';

describe('OverviewtableComponent', () => {
  let component: OverviewtableComponent;
  let fixture: ComponentFixture<OverviewtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
