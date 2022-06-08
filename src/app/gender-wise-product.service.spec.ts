import { TestBed } from '@angular/core/testing';

import { GenderWiseProductService } from './gender-wise-product.service';

describe('GenderWiseProductService', () => {
  let service: GenderWiseProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenderWiseProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
