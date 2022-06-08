import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBrandWiseComponent } from './product-brand-wise.component';

describe('ProductBrandWiseComponent', () => {
  let component: ProductBrandWiseComponent;
  let fixture: ComponentFixture<ProductBrandWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductBrandWiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBrandWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
