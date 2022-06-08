import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from './banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http:HttpClient) { }
  saveBanner(banner:Banner):Observable<string>{
    return this.http.post("http://localhost:8081/api/banner/setBanner",banner,{responseType:"text"});
  }
  showBanner():Observable<Banner[]>{
    const bannerApi = "http://localhost:8081/api/banner/showBanner";
    return this.http.get<Banner[]>(bannerApi);
  }
  deleteBanner(id:number):Observable<string>{
    return this.http.delete("http://localhost:8081/api/banner/deleteBanner/"+id,{responseType:"text"});
  }
}
