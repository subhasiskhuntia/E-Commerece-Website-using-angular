import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatedResponse } from '../authenticated-response';
import { CartItem } from '../cart-item';
import { CartService } from '../cart.service';
import { OrderDetails } from '../order-details';
import { OrderItem } from '../order-item';
import { Product } from '../product';
import { ShoppingCart } from '../shopping-cart';
import { UserService } from '../user.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  totalItem!: number;
  totalPrice: number = 0;
  constructor(
    private cartService: CartService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCartItems();
  }
  cart!: ShoppingCart;
  loadCartItems() {
    if (sessionStorage.getItem('token') != null) {
      this.cartService.loadCartItem().subscribe(
        (result) => {
          // console.log(result);
          this.cart = result;
          console.log(this.cart);
          this.totalItem = this.cart.cartItems.length;
          this.totalPrice = 0;
          for (let i = 0; i < this.cart.cartItems.length; i++) {
            this.totalPrice =
              this.totalPrice +
              this.cart.cartItems[i].quantity *
                this.cart.cartItems[i].cartProduct.sizeAndQuantity[0].price;
            console.log(this.totalPrice);
          }
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
                () => this.loadCartItems()
              );
            }
          }
        }
      );
    }
  }

  increaseQuantity(item: CartItem) {
    item.quantity++;
    console.log(this.cart);
    this.cartService.updateCart(this.cart).subscribe(
      (result) => (this.cart = result),
      (error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401 && sessionStorage.getItem('token') != null) {
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
              () => this.increaseQuantity(item)
            );
          }
        }
      },
      () => this.loadCartItems()
    );
  }
  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
    }
    this.cartService.updateCart(this.cart).subscribe(
      (result) => (this.cart = result),
      (error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401 && sessionStorage.getItem('token') != null) {
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
              () => this.decreaseQuantity(item)
            );
          }
        }
      },
      () => this.loadCartItems()
    );
  }

  removeItem(item: CartItem) {
    this.cart.cartItems = this.cart.cartItems.filter(
      (cartitem) => cartitem != item
    );
    console.log(this.cart);
    let cart = new ShoppingCart(0, [item], '');
    this.cartService.deleteCartItem(cart).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401 && sessionStorage.getItem('token') != null) {
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
              () => this.removeItem(item)
            );
          }
        }
      },
      () => this.loadCartItems()
    );
  }
  buyNow() {
    let cart: ShoppingCart = this.cart;
    console.log(cart);

    let orderItem: OrderItem[] = [];
    for (let i = 0; i < this.cart.cartItems.length; i++) {
      let order: OrderItem = new OrderItem(
        i,
        this.cart?.cartItems?.[i]?.cartProduct,
        this.cart?.cartItems?.[i]?.quantity
      );
      orderItem.push(order);
    }
    console.log(orderItem);

    let orderDetails: OrderDetails = new OrderDetails(
      0,
      sessionStorage.getItem('userName') + '',
      1,
      this.totalPrice,
      orderItem
    );
    this.userService.BuyTheProduct(this.totalPrice, orderDetails,cart);
    // this.cartService
    //   .deleteAllCartItem(cart)
    //   .subscribe((result) => console.log(result));
  }
}
