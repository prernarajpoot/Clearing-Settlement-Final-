import { TestBed } from '@angular/core/testing';

import { CmCorporateActionServiceService } from './cm-corporate-action-service.service';

describe('CmCorporateActionServiceService', () => {
  let service: CmCorporateActionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmCorporateActionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
