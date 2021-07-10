import { TestBed } from '@angular/core/testing';

import { LegifyApplyDocumentsDataService } from './legify-apply-documents-data.service';

describe('LegifyApplyDocumentsDataService', () => {
  let service: LegifyApplyDocumentsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegifyApplyDocumentsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
