import { TestBed } from '@angular/core/testing';

import { OverviewtableService } from './overviewtable.service';

describe('OverviewtableService', () => {
  let service: OverviewtableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverviewtableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
