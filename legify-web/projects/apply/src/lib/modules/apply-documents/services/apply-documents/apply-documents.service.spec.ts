import { TestBed } from '@angular/core/testing';

import { ApplyDocumentsService } from './apply-documents.service';

describe('ApplyDocumentsService', () => {
  let service: ApplyDocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyDocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
