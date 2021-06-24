import { TestBed } from '@angular/core/testing';

import { LegifyApplyDocumentsService } from './legify-apply-documents.service';

describe('LegifyApplyDocumentsService', () => {
  let service: LegifyApplyDocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegifyApplyDocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
