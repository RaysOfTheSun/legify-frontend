import { TestBed } from '@angular/core/testing';

import { ApplyDocumentsCreatorService } from './apply-documents-creator.service';

describe('ApplyDocumentsCreatorService', () => {
  let service: ApplyDocumentsCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyDocumentsCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
