import { TestBed } from '@angular/core/testing';

import { HasSelectedApplicationGuard } from './has-selected-application.guard';

describe('HasSelectedApplicationGuard', () => {
  let guard: HasSelectedApplicationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HasSelectedApplicationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
