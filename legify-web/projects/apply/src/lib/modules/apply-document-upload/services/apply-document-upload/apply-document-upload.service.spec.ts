import { TestBed } from '@angular/core/testing';

import { ApplyDocumentUploadService } from './apply-document-upload.service';

describe('ApplyDocumentUploadService', () => {
  let service: ApplyDocumentUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyDocumentUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
