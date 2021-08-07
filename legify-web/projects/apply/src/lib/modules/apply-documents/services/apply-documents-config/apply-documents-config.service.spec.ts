import { TestBed } from '@angular/core/testing';

import { ApplyDocumentsConfigService } from './apply-documents-config.service';

describe('ApplyDocumentsConfigService', () => {
  let service: ApplyDocumentsConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyDocumentsConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
