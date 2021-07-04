import { TestBed } from '@angular/core/testing';

import { UsaApplyDocumentsService } from './usa-apply-documents.service';

describe('UsaApplyDocumentsService', () => {
  let service: UsaApplyDocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsaApplyDocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
