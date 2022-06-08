import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from './brand;';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductBrandWiseService {
  constructor(private http:HttpClient) { }
  loadProductOfTheBrand(id:number):Observable<Product[]>{
    return this.http.post<Product[]>("http://localhost:8081/api/brand/perticularBrand/"+id,new Brand("random"));
  }
}
