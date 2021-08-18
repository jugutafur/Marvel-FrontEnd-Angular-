import { TestBed } from '@angular/core/testing';

import { GuardianAccessGuard } from './guardian-access.guard';

describe('GuardianAccessGuard', () => {
  let guard: GuardianAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardianAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
