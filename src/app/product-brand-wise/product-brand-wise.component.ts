import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductBrandWiseService } from '../product-brand-wise.service';

@Component({
  selector: 'app-product-brand-wise',
  templateUrl: './product-brand-wise.component.html',
  styleUrls: ['./product-brand-wise.component.css'],
})
export class ProductBrandWiseComponent implements OnInit {
  constructor(
    private pbws: ProductBrandWiseService,
    private route: ActivatedRoute
  ) {}
  userId: number | null = null;

  ngOnInit(): void {
    this.loadProducts();
  }
  receiveFilteredProduct($event:any){
    this.products=$event;
    console.log(this.products);
    console.log("from event emiiter");
    
    
  }
  products: Product[] = [];
  loadProducts() {
    sessionStorage.removeItem("search");
    sessionStorage.removeItem("gender");
    sessionStorage.removeItem("category");
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.pbws.loadProductOfTheBrand(this.userId).subscribe(
      (result) => {
        // console.log(result);
        
        this.products = result;
        sessionStorage.setItem("brand",this.products[0].brand.name);
      },
      (error) => console.log(error),
      () => console.log('completed')
    );
  }
}
