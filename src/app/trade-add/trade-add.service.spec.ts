import { TestBed } from '@angular/core/testing';

import { TradeAddService } from './trade-add.service';

describe('TradeAddService', () => {
  let service: TradeAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradeAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
