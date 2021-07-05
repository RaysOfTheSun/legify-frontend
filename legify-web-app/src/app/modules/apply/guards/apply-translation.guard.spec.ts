import { TestBed } from '@angular/core/testing';

import { ApplyTranslationGuard } from './apply-translation.guard';

describe('ApplyTranslationGuard', () => {
  let guard: ApplyTranslationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ApplyTranslationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
