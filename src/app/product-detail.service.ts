import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from './cart-item';
import { Product } from './product';
import { ShoppingCart } from './shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor(private http:HttpClient) { }
  product!: Product;
  loadProductDetails(id:number):Observable<Product>{
    return this.http.get<Product>("http://localhost:8081/products/findProductById/"+id);
  }
  addToProduct(cart:ShoppingCart):Observable<string>{
    return this.http.post("http://localhost:8081/api/user/addToCart",cart,{responseType:"text"});
  }
}
