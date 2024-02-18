import { TestBed } from '@angular/core/testing';

import { GuardianSesionGuard } from './guardian-sesion.guard';

describe('GuardianSesionGuard', () => {
  let guard: GuardianSesionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardianSesionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
