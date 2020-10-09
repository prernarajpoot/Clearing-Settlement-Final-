import { TestBed } from '@angular/core/testing';

import { CostSettlementServiceService } from './cost-settlement-service.service';

describe('CostSettlementServiceService', () => {
  let service: CostSettlementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostSettlementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
