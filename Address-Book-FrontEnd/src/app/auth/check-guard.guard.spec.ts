import { TestBed, async, inject } from '@angular/core/testing';

import { CheckGuardGuard } from './check-guard.guard';

describe('CheckGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckGuardGuard]
    });
  });

  it('should ...', inject([CheckGuardGuard], (guard: CheckGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
