import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCart } from './shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart!: ShoppingCart;
  constructor(private http:HttpClient) { }
  loadCartItem():Observable<ShoppingCart>{
    console.log("inside load cart item");
    return this.http.post<ShoppingCart>("http://localhost:8081/api/user/showCart",new ShoppingCart(0,[],Number(sessionStorage.getItem("userId"))))
  }
}
