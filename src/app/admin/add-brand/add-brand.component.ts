import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Brand } from 'src/app/brand;';
import { ProductBrandService } from 'src/app/product-brand.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css'],
})
export class AddBrandComponent implements OnInit {
  typedBrand: string = '';
  brands: string[] = [];
  suggestedBrands: string[] = [];
  constructor(private brandService: ProductBrandService) {}

  ngOnInit(): void {
    this.loadAllBrands();
  }
  saveBrand(brandRef: NgForm) {
    console.log(brandRef.value);
    let brand = new Brand(brandRef.value['name'], 0, brandRef.value['image']);
    this.brandService.saveProductBrand(brand).subscribe(
      (result) => alert(result),
      (error) => console.log(error),
      () => brandRef.reset()
    );
  }
  loadAllBrands() {
    this.brandService
      .getDistinctBrands()
      .subscribe((result) => (this.brands = result));
  }
  showSuggestedBrands() {
    this.suggestedBrands = [];
    this.suggestedBrands = this.brands.filter((brand) =>
      brand
        ?.trim()
        ?.toLowerCase()
        .includes(this.typedBrand.trim().toLowerCase())
    );
  }
}
