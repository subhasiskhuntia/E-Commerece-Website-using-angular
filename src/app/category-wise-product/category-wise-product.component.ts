import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryWiseProductsService } from '../category-wise-products.service';
import { Product } from '../product';

@Component({
  selector: 'app-category-wise-product',
  templateUrl: './category-wise-product.component.html',
  styleUrls: ['./category-wise-product.component.css'],
})
export class CategoryWiseProductComponent implements OnInit {
  id: number = Number(this.route.snapshot.paramMap.get('id'));
  inputValue:string="category";
  constructor(
    private cwps: CategoryWiseProductsService,
    private route: ActivatedRoute
  ) {}
  products: Product[] = [];
  ngOnInit(): void {
    this.loadProducts();
  }
  receiveFilteredProduct($event: any) {
    this.products = $event;
    console.log(this.products);
    console.log('from event emiiter');
  }
  loadProducts() {
    sessionStorage.removeItem('search');
    sessionStorage.removeItem('brand');
    sessionStorage.removeItem('gender');

    this.cwps.loadproducts(this.id).subscribe((result) => {
      this.products = result;
      // console.log(this.products);
      this.inputValue=this.products[0].category.type;
      sessionStorage.setItem("category",this.products[0].category.type);
    });
  }
}
