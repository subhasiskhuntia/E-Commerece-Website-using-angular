import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }
  loadAllProductDetails():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8081/products/getAllProducts");
  }
  storeProduct(product:Product):Observable<string>{
    return this.http.post("http://localhost:8081/products/storeProduct",product,{responseType:"text"});
  }
  deleteProduct(pid:number):Observable<string>{
    return this.http.delete("http://localhost:8081/products/deleteProduct/"+pid,{responseType:'text'});
  }
  updateProduct(product:Product):Observable<string>{
    return this.http.put("http://localhost:8081/products/updateProduct",product,{responseType:"text"});
  }
  getSalesInCategory():Observable<any>{
    return this.http.get("http://localhost:8081/api/admin/salesInCategory")
  }
  getSalesInBrand():Observable<any>{
    return this.http.get("http://localhost:8081/api/admin/salesInBrand")
  }
  sales(url:string):Observable<any>{
    return this.http.get<any>(url);
  }
}
