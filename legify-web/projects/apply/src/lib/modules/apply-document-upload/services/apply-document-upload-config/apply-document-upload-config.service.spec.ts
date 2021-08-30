import { TestBed } from '@angular/core/testing';

import { ApplyDocumentUploadConfigService } from './apply-document-upload-config.service';

describe('ApplyDocumentUploadConfigService', () => {
  let service: ApplyDocumentUploadConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyDocumentUploadConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
