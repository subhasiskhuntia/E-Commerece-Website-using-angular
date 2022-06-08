import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilteringVariable } from './filtering-variable';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  constructor(private http: HttpClient) {}
  getDistinctColor(): Observable<string> {
    return this.http.get('http://localhost:8081/products/getDistinctColor', {
      responseType: 'text',
    });
  }
  getFilteredData(data:FilteringVariable):Observable<Product[]>{
    return this.http.post<Product[]>("http://localhost:8081/products/getFilterdProduct",data);
  }
}
