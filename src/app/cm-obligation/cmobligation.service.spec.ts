import { TestBed } from '@angular/core/testing';

import { CmobligationService } from './cmobligation.service';

describe('CmobligationService', () => {
  let service: CmobligationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmobligationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
