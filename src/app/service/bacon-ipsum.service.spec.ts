import { TestBed } from '@angular/core/testing';

import { BaconIpsumService } from './bacon-ipsum.service';

describe('BaconIpsumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaconIpsumService = TestBed.get(BaconIpsumService);
    expect(service).toBeTruthy();
  });
});
