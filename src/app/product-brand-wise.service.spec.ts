import { TestBed } from '@angular/core/testing';

import { ProductBrandWiseService } from './product-brand-wise.service';

describe('ProductBrandWiseService', () => {
  let service: ProductBrandWiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductBrandWiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
