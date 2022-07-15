import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from './brand;';

@Injectable({
  providedIn: 'root'
})
export class ProductBrandService {

  constructor(private http:HttpClient) {}
  saveProductBrand(Brand:Brand):Observable<string>{
    return this.http.post("http://localhost:8081/api/brand/saveBrand",Brand,{responseType:'text'})
  }
  showBrand():Observable<Brand[]>{
    return this.http.get<Brand[]>("http://localhost:8081/api/brand/showBrand")
  }
  loadDistinctBrand():Observable<string>{
    return this.http.get("http://localhost:8081/api/brand/getDistinctBrand",{responseType:"text"});
  }
  getDistinctBrands():Observable<string[]>{
    return this.http.get<string[]>("http://localhost:8081/api/brand/loadDistinctBrand")
  }
  updateBrands(brand:Brand):Observable<string>{
    return this.http.post("http://localhost:8081/api/brand/updateBrand",brand,{responseType:"text"})
  }
  deleteBrand(id:number):Observable<string>{
    return this.http.delete("http://localhost:8081/api/brand/deleteBrand/"+id,{responseType:"text"})
  }
}
