import { TestBed, inject } from '@angular/core/testing';

import { ExpertsService } from './experts.service';

describe('ExpertsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpertsService]
    });
  });

  it('should ...', inject([ExpertsService], (service: ExpertsService) => {
    expect(service).toBeTruthy();
  }));
});
