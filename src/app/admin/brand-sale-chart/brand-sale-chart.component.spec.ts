import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandSaleChartComponent } from './brand-sale-chart.component';

describe('BrandSaleChartComponent', () => {
  let component: BrandSaleChartComponent;
  let fixture: ComponentFixture<BrandSaleChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandSaleChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandSaleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
