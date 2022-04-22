import { TestBed } from '@angular/core/testing';

import { MystorageService } from './mystorage.service';

describe('MystorageService', () => {
  let service: MystorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MystorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
