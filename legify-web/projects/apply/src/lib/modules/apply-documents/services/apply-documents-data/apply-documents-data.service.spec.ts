import { TestBed } from '@angular/core/testing';

import { ApplyDocumentsDataService } from './apply-documents-data.service';

describe('ApplyDocumentsDataService', () => {
  let service: ApplyDocumentsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyDocumentsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
