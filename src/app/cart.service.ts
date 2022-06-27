import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from './cart-item';
import { ShoppingCart } from './shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart!: ShoppingCart;
  constructor(private http:HttpClient) { }

  loadCartItem():Observable<ShoppingCart>{
    let userName=sessionStorage.getItem("userName");
    
    console.log("inside load cart item");
    return this.http.post<ShoppingCart>("http://localhost:8081/api/user/showCart",new ShoppingCart(0,[],userName))
  }
  updateCart(cart:ShoppingCart):Observable<ShoppingCart>{
    return this.http.post<ShoppingCart>("http://localhost:8081/api/user/updateCart",cart);
  }
  deleteCartItem(cart:ShoppingCart):Observable<ShoppingCart>{
    return this.http.post<ShoppingCart>("http://localhost:8081/api/user/deleteCartItem",cart)
  }
  deleteAllCartItem(cart:ShoppingCart):Observable<string>{
    return this.http.post("http://localhost:8081/api/user/deleteAllCartItem",cart,{responseType:"text"})
  }
}
