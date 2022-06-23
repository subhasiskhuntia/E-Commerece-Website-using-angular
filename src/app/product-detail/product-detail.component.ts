import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticatedResponse } from '../authenticated-response';
import { CartItem } from '../cart-item';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { ProductDetailService } from '../product-detail.service';
import { ShoppingCart } from '../shopping-cart';
import { UserService } from '../user.service';

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
    private cartService: CartService,
    private userService: UserService
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
        console.log(result);
        
        this.product = result;
        console.log(this.product);
      },
      (error) => console.log(error),
      () => console.log('completed')
    );
  }
  addToCart() {
    let cartItem: CartItem = new CartItem(0, 1, this.product);
    let userName: string | null = sessionStorage.getItem('userName');
    let cart: ShoppingCart = new ShoppingCart(0, [cartItem], userName);
    console.log(cart);
    if (sessionStorage.getItem('userName') == null) {
      console.log('Login First');
      this.router.navigate(['/login']);
    }
    console.log(cart);
    
    this.pd.addToProduct(cart).subscribe((result) => {
      console.log(result);
      this.cartService.loadCartItem().subscribe(
        (result) => {
          this.totalItem = result.cartItems.length;
          // console.log(this.totalItem);
          // console.log(result);
        },
        (error) => {
          if (error instanceof HttpErrorResponse) {
            if (
              error.status === 401 &&
              sessionStorage.getItem('token') != null
            ) {
              // this.router.navigate(['login']);
              // console.log("401 error");
              this.userService.refreshToken().subscribe(
                (result) => {
                  let token: AuthenticatedResponse = JSON.parse(
                    JSON.stringify(result)
                  );
                  // console.log(token.token);
                  let refreshToken = 'Bearer ' + token.token;

                  sessionStorage.setItem('token', refreshToken);
                },
                (error) => {
                  console.log(error);
                  this.router.navigate(['/login']);
                },
                () => this.addToCart()
              );
            }
          }
        }
      );
      this.message = result;
    });
  }
}
