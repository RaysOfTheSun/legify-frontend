import { TestBed } from '@angular/core/testing';

import { LegifyTranslationLoaderGuard } from './legify-translation-loader.guard';

describe('TranslationLoaderGuard', () => {
  let guard: LegifyTranslationLoaderGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LegifyTranslationLoaderGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
