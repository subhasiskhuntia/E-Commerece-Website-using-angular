import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWiseProductComponent } from './category-wise-product.component';

describe('CategoryWiseProductComponent', () => {
  let component: CategoryWiseProductComponent;
  let fixture: ComponentFixture<CategoryWiseProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryWiseProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryWiseProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
