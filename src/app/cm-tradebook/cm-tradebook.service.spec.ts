import { TestBed } from '@angular/core/testing';

import { CmTradebookService } from './cm-tradebook.service';

describe('CmTradebookService', () => {
  let service: CmTradebookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmTradebookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
