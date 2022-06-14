import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from '../cart-item';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { ProductDetailService } from '../product-detail.service';
import { ShoppingCart } from '../shopping-cart';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  id!: number;
  message: string = 'Add to Cart';
  totalItem!: number;
  constructor(
    private pd: ProductDetailService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService:CartService
  ) {
    this.route.params.subscribe((result) => (this.id = result['id']));
  }

  ngOnInit(): void {
    this.loadProductDetails();
  }
  product!: Product;
  loadProductDetails() {
    this.pd.loadProductDetails(this.id).subscribe(
      (result) => {
        this.product = result;
        console.log(this.product);
      },
      (error) => console.log(error),
      () => console.log('completed')
    );
  }
  addToCart() {
    let cartItem: CartItem = new CartItem(0, 1, this.product);
    let userId: number = Number(sessionStorage.getItem('userId'));
    let cart: ShoppingCart = new ShoppingCart(0, [cartItem], userId);
    console.log(cart);
    if (sessionStorage.getItem('userId') == null) {
      console.log('Login First');
      this.router.navigate(['/login']);
    }

    this.pd.addToProduct(cart).subscribe((result) => {
      console.log(result);
      this.cartService.loadCartItem().subscribe(result=>
        {
          this.totalItem = result.cartItems.length;
          console.log(this.totalItem);
          console.log(result);
          
          
        }
      )
      this.message = result;
    });
    
  }
}
