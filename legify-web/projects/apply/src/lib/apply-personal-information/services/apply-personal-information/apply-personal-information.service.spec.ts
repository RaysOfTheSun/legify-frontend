import { TestBed } from '@angular/core/testing';

import { ApplyPersonalInformationService } from './apply-personal-information.service';

describe('ApplyPersonalInformationService', () => {
  let service: ApplyPersonalInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyPersonalInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
