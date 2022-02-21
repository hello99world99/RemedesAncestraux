import { TestBed } from '@angular/core/testing';

import { RemedeServiceService } from './remede-service.service';

describe('RemedeServiceService', () => {
  let service: RemedeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemedeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
