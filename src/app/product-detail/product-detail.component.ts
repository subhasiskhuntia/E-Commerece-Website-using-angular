import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductDetailService } from '../product-detail.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  id!: number;
  constructor(private pd: ProductDetailService, private route: ActivatedRoute) {
    this.route.params.subscribe((result) => (this.id = result['id']));
  }

  ngOnInit(): void {
    this.loadProductDetails();
  }
  product!: Product;
  loadProductDetails() {
    this.pd.loadProductDetails(this.id).subscribe(
      (result) => {

        (this.product = result);
        console.log(this.product);
        
      },
      (error) => console.log(error),
      () => console.log('completed')
    );
  }
}
