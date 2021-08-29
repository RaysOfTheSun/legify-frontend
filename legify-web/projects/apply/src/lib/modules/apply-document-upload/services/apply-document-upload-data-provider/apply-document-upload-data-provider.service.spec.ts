import { TestBed } from '@angular/core/testing';

import { ApplyDocumentUploadDataProviderService } from './apply-document-upload-data-provider.service';

describe('ApplyDocumentUploadDataProviderService', () => {
  let service: ApplyDocumentUploadDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyDocumentUploadDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
