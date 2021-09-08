import { TestBed } from '@angular/core/testing';

import { ApplyDataLoaderGuard } from './apply-data-loader.guard';

describe('ApplyDataLoaderGuard', () => {
  let guard: ApplyDataLoaderGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ApplyDataLoaderGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
