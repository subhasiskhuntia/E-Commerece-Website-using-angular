import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderWiseProductComponent } from './gender-wise-product.component';

describe('GenderWiseProductComponent', () => {
  let component: GenderWiseProductComponent;
  let fixture: ComponentFixture<GenderWiseProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderWiseProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderWiseProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
