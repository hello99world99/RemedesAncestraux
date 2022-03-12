import { TestBed } from '@angular/core/testing';

import { PharmaServiceService } from './pharma-service.service';

describe('PharmaServiceService', () => {
  let service: PharmaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
