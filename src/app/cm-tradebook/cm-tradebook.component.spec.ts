import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmTradebookComponent } from './cm-tradebook.component';

describe('CmTradebookComponent', () => {
  let component: CmTradebookComponent;
  let fixture: ComponentFixture<CmTradebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmTradebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmTradebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
