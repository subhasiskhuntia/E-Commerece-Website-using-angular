import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CategoryWiseProductsService {

  constructor(private http:HttpClient) { }
  loadproducts(id:number):Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8081/api/category/categoryProduct/"+id);
  }
}
