import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class GenderWiseProductService {
  public id:number=0;
  constructor(private http:HttpClient) { }
  loadProductGenderWise(id:number):Observable<Product[]>{
    this.id=id;
    return this.http.get<Product[]>("http://localhost:8081/api/gender/products/"+id);
  }
}
