import { TestBed, inject } from '@angular/core/testing';

import { CombustivelService } from './combustivel.service';

describe('CombustivelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CombustivelService]
    });
  });

  it('should be created', inject([CombustivelService], (service: CombustivelService) => {
    expect(service).toBeTruthy();
  }));
});
