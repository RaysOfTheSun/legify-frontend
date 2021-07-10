import { TestBed } from '@angular/core/testing';

import { LegifyApplyDocumentsProgressService } from './legify-apply-documents-progress.service';

describe('LegifyApplyDocumentsProgressService', () => {
  let service: LegifyApplyDocumentsProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegifyApplyDocumentsProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
