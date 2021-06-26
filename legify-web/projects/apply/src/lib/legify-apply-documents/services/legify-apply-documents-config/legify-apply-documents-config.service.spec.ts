import { TestBed } from '@angular/core/testing';

import { LegifyApplyDocumentsConfigService } from './legify-apply-documents-config.service';

describe('LegifyApplyDocumentsConfigService', () => {
  let service: LegifyApplyDocumentsConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegifyApplyDocumentsConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
