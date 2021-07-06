import { TestBed } from '@angular/core/testing';

import { LegifyApplyI18nGuard } from './legify-apply-i18n.guard';

describe('LegifyApplyI18nGuard', () => {
  let guard: LegifyApplyI18nGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LegifyApplyI18nGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
