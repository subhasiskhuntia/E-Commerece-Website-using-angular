import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Brand } from '../brand;';
import { Category } from '../category;';
import { Discount } from '../discount;';
import { Gender } from '../gender;';
import { Images } from '../images;';
import { Product } from '../product';
import { ProductBrandService } from '../product-brand.service';
import { ProductCategoryService } from '../product-category.service';
import { ProductSizeAndQuantity } from '../product-size-and-quantity';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products!: Product[];
  discounts:Discount[]=[];
  message: string = '';
  deleteMsg: string = '';
  storeMessage: string = '';
  buttonName: string = 'Store Product';
  productUpdated!: Product;
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
    brandAlternative:new FormControl(),
    discountAlternative:new FormControl(),
    category: new FormControl(),
    categoryAlternative:new FormControl(),
    image1: new FormControl(),
    image2: new FormControl(),
    image3: new FormControl(),
    image4: new FormControl(),
    image5: new FormControl(),
    numberOfSize:new FormControl()
  });
  constructor(private ps: ProductService,private pbs:ProductBrandService,private pcs:ProductCategoryService) {}
  categories:Category[]=[];
  brands:Brand[]=[];
  ngOnInit(): void {
    this.loadAllProductDetails();
    this.loadProductBrands();
    this.loadProductCategory();
  }
  loadAllProductDetails(): void {
    // this.ps
    //   .loadAllProductDetails()
    //   .subscribe((result) => (this.products = result));
  }
  storeProduct(bName: string = '') {
    console.log(this.productRef.value);
    let value = this.productRef.value;
    if(this.productRef.value.discount=='other'){
      this.productRef.value.discount=this.productRef.value.discountAlternative
    }
    if(this.productRef.value.brand=="other"){
      this.productRef.value.brand=this.productRef.value.brandAlternative;
    }
    if(this.productRef.value.category=="other"){
      this.productRef.value.category=this.productRef.value.categoryAlternative;
    }
    // if(bName=="Store Product"){
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
    this.ps.storeProduct(product).subscribe(
      (result) => {
        // alert(result);
        this.message = result;
      },
      (error) => console.log(error),
      () => {
        // this.loadAllProductDetails();
      }
    );
    //   }
    //   else{
    //     let finalProductPrice:Product=this.productUpdated;
    //     finalProductPrice.price=this.productRef.value.price;
    //     this.ps.updateProduct(this.productUpdated).subscribe(result=>console.log(result),error=>console.log(error),()=>this.loadAllProductDetails())
    // }

    // this.productRef.reset();
  }
  deleteRec(pid: number) {
    console.log(pid);
    this.ps.deleteProduct(pid).subscribe(
      (result) => (this.message = result),
      (error) => console.log(error),
      () => {
        this.loadAllProductDetails();
      }
    );
  }
  updateRec(product: Product) {
    console.log(product);
    this.productUpdated = product;
    this.buttonName = 'Update Product';
    this.productRef.get('pid')?.setValue(product.id);
    this.productRef.get('pid')?.disable({ onlySelf: true });
    this.productRef.get('pname')?.setValue(product.name);
    this.productRef.get('pname')?.disable({ onlySelf: true });
    // this.productRef.get("price")?.setValue(product.price);
    // this.productRef.get("url")?.setValue(product.image1);
    this.productRef.get('url')?.disable({ onlySelf: true });
  }
  loadProductCategory() {
    this.pbs.showBrand().subscribe(result=>this.brands=result);
  }
  loadProductBrands(){
    this.pcs.showCategory().subscribe(result=>this.categories=result);
  }
}
