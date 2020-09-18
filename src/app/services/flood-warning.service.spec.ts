import { TestBed } from '@angular/core/testing';

import { FloodWarningService } from './flood-warning.service';

describe('FloodWarningService', () => {
  let service: FloodWarningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FloodWarningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
