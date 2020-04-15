import { TestBed } from '@angular/core/testing';

import { WorkStringsService } from './work-strings.service';

describe('WorkStringsService', () => {
  let service: WorkStringsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkStringsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
