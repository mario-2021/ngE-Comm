import { TestBed } from '@angular/core/testing';

import { GuardLogoutUserGuard } from './guard-logout-user.guard';

describe('GuardLogoutUserGuard', () => {
  let guard: GuardLogoutUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardLogoutUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
