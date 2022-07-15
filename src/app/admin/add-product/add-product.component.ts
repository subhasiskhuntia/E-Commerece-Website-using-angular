import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Brand } from 'src/app/brand;';
import { Category } from 'src/app/category;';
import { Discount } from 'src/app/discount;';
import { Gender } from 'src/app/gender;';
import { Images } from 'src/app/images;';
import { Product } from 'src/app/product';
import { ProductBrandService } from 'src/app/product-brand.service';
import { ProductCategoryService } from 'src/app/product-category.service';
import { ProductSizeAndQuantity } from 'src/app/product-size-and-quantity';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  message: string = '';
  typedCategory: string = '';
  typedBrand: string = '';
  suggestedCategory: string[] = [];
  suggestedBrands: string[] = [];
  categories:string[]=[];
  brands:string[]=[];
  constructor(
    private productService: ProductService,
    private productBrandService: ProductBrandService,
    private productCategoryService: ProductCategoryService
  ) {}

  ngOnInit(): void {
    this.getDistinctCategory();
    this.getDistinctBrands();
  }
  productRef = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    quantity: new FormControl(),
    color: new FormControl(),
    size: new FormControl(),
    sku: new FormControl(),
    gender: new FormControl(),
    discount: new FormControl(),
    brand: new FormControl(),
    brandAlternative: new FormControl(),
    discountAlternative: new FormControl(),
    category: new FormControl(),
    categoryAlternative: new FormControl(),
    image1: new FormControl(),
    image2: new FormControl(),
    image3: new FormControl(),
    image4: new FormControl(),
    image5: new FormControl(),
    numberOfSize: new FormControl(),
  });
  storeProduct() {
    let value = this.productRef.value;

    let product = new Product(
      0,
      value.name,
      value.description,
      value.sku,
      value.color,
      new Images(
        value.image1,
        value.image2,
        value.image3,
        value.image4,
        value.image5
      ),
      new Gender(value.gender),
      new Category(value.category),
      new Discount(value.discount),
      new Brand(value.brand),
      [new ProductSizeAndQuantity(value.size, value.quantity, value.price)]
    );
    // alert(product);
    console.log(product);
    this.productService.storeProduct(product).subscribe(
      (result) => {
        // alert(result);
        this.message = result;
      },
      (error) => console.log(error),
      () => {
        console.log("added");
        
      }
    );
  }
  getDistinctBrands() {
    this.productBrandService
      .getDistinctBrands()
      .subscribe((result) => (this.brands=result
      ));
  }
  getDistinctCategory() {
    this.productCategoryService.loadDistinctCategory().subscribe(result=>this.categories=result
    )
  }
  showSuggestedCategories() {
    this.suggestedCategory = [];
    this.suggestedCategory = this.categories.filter((category) =>
      category
        ?.trim()
        ?.toLowerCase()
        .includes(this.typedCategory.trim().toLowerCase())
    );
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
