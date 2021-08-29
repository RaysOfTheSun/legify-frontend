import { TestBed } from '@angular/core/testing';

import { ApplyDocumentUploadDataMapperService } from './apply-document-upload-data-mapper.service';

describe('ApplyDocumentUploadDataMapperService', () => {
  let service: ApplyDocumentUploadDataMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyDocumentUploadDataMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
