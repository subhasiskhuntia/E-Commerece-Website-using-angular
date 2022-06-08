import { TestBed } from '@angular/core/testing';

import { CategoryWiseProductsService } from './category-wise-products.service';

describe('CategoryWiseProductsService', () => {
  let service: CategoryWiseProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryWiseProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
