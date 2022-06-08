import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class GenderWiseProductService {

  constructor(private http:HttpClient) { }
  loadProductGenderWise(id:number):Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8081/api/gender/products/"+id);
  }
}
