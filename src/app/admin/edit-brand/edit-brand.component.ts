import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/brand;';
import { ProductBrandService } from 'src/app/product-brand.service';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css'],
})
export class EditBrandComponent implements OnInit {
  brands: Brand[] = [];
  image: string = '';
  name: string = '';
  selectedBrand: number = -1;
  constructor(private brandService: ProductBrandService) {}

  ngOnInit(): void {
    this.loadBrands();
  }
  loadBrands() {
    this.brandService.showBrand().subscribe((result) => (this.brands = result));
  }
  editCategory(id: number, brand: Brand) {
    this.selectedBrand = id;
    this.image = brand.url;
  }
  updateCategory(brand: Brand) {
    brand.url = this.image;
    this.brandService
      .updateBrands(brand)
      .subscribe((result) => console.log(result));
    this.image = '';
    this.selectedBrand = -1;
  }
  deleteBrand(id: number) {
    this.brandService.deleteBrand(id).subscribe(
      (result) => console.log(result),
      (error) => console.log(error),
      () => this.loadBrands()
    );
  }
}
