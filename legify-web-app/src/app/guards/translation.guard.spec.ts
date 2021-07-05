import { TestBed } from '@angular/core/testing';

import { TranslationGuard } from './translation.guard';

describe('TranslationGuard', () => {
  let guard: TranslationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TranslationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
