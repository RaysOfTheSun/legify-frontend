import { TestBed } from '@angular/core/testing';

import { LegifyApplyDocumentsDocumentMapperService } from './legify-apply-documents-document-mapper.service';

describe('LegifyApplyDocumentsMapperService', () => {
  let service: LegifyApplyDocumentsDocumentMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegifyApplyDocumentsDocumentMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
