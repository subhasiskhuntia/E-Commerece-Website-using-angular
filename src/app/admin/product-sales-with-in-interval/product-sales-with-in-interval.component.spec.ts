import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSalesWithInIntervalComponent } from './product-sales-with-in-interval.component';

describe('ProductSalesWithInIntervalComponent', () => {
  let component: ProductSalesWithInIntervalComponent;
  let fixture: ComponentFixture<ProductSalesWithInIntervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSalesWithInIntervalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSalesWithInIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
