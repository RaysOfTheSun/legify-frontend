import { TestBed } from '@angular/core/testing';

import { NftfService } from './nftf.service';

describe('NftfService', () => {
  let service: NftfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NftfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
