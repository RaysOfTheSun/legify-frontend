import { TestBed } from '@angular/core/testing';

import { ApplyConfigLoaderGuard } from './apply-config-loader.guard';

describe('ApplyConfigLoaderGuard', () => {
  let guard: ApplyConfigLoaderGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ApplyConfigLoaderGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
