import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: number = -1;
  size: string = '';
  price: number = 0;
  quantity: number = 0;
  constructor(private productService: ProductService,private router:Router) {}

  ngOnInit(): void {
    if(sessionStorage.getItem("role")!="ROLE_ADMIN"){
      this.router.navigate(["/admin/adminHome"])
    }
    this.loadAllProducts();
  }
  loadAllProducts() {
    this.productService
      .loadAllProductDetails()
      .subscribe((result) => (this.products = result));
  }
  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(
      (result) => console.log(result),
      (error) => console.log(error),
      () => this.loadAllProducts()
    );
  }
  editProduct(id: number, product: Product) {
    this.selectedProduct = id;
    this.price = product.sizeAndQuantity[0].price;
    this.quantity = product.sizeAndQuantity[0].quantity;
    this.size = product.sizeAndQuantity[0].size;
  }
  submitProduct(product: Product) {
    this.selectedProduct = -1;
    console.log(this.price);
    console.log(this.quantity);
    console.log(this.size);
    product.sizeAndQuantity[0].price = this.price;
    product.sizeAndQuantity[0].quantity = this.quantity;
    product.sizeAndQuantity[0].size = this.size;
    
    this.productService
    .updateProduct(product)
    .subscribe((result) => console.log(result));
   
    this.price = 0;
    this.size = '';
    this.quantity = 0;
  }
}
