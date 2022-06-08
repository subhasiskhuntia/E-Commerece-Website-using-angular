import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category;';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  constructor(private http:HttpClient) {}
  saveProductCategory(category:Category):Observable<string>{
    return this.http.post("http://localhost:8081/api/category/saveCategory",category,{responseType:'text'})
  }
  showCategory():Observable<Category[]>{
    return this.http.get<Category[]>("http://localhost:8081/api/category/showCategory")
  }
  distinctCategory():Observable<string>{
    return this.http.get("http://localhost:8081/api/category/getDistinctCategory", { responseType: "text" });
  }
}
