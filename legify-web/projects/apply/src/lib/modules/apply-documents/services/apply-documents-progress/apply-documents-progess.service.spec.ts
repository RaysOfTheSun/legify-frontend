import { TestBed } from '@angular/core/testing';

import { ApplyDocumentsProgessService } from './apply-documents-progess.service';

describe('ApplyDocumentsProgessService', () => {
  let service: ApplyDocumentsProgessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyDocumentsProgessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
