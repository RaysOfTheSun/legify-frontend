import { TestBed } from '@angular/core/testing';

import { TranslationDataLoaderGuard } from './translation-data-loader.guard';

describe('TranslationDataLoaderGuard', () => {
  let guard: TranslationDataLoaderGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TranslationDataLoaderGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
