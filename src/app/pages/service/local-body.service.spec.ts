import { TestBed, inject } from '@angular/core/testing';

import { LocalBodyService } from './local-body.service';

describe('LocalBodyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalBodyService]
    });
  });

  it('should ...', inject([LocalBodyService], (service: LocalBodyService) => {
    expect(service).toBeTruthy();
  }));
});
