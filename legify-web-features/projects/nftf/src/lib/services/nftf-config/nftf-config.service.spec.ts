import { TestBed } from '@angular/core/testing';

import { NftfConfigService } from './nftf-config.service';

describe('NftfConfigService', () => {
  let service: NftfConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NftfConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
