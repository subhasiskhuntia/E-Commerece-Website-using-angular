import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { catchError, forkJoin, map, of } from "rxjs";
import { BannerService } from "../banner.service";

@Injectable()
export class RouteResolver implements Resolve<any>{
   constructor(private bannerService:BannerService){

   }
   resolve() {
       return this.bannerService.showBanner().pipe(
           catchError(error=>{return of(null);}) //can write instead of null error:"api failed to load"
       );
   }
//    if multiple api is calling happens then 
// return forkJoin(
//     this.bannerService.showBanner(),
//     this.bannerService.saveBanner()
//     ).pipe(map(data=>{
//         console.log("data1",data[0]);
//         console.log("data2",data[1]);
//         return {drugList:data[0],param:data[1]}
        
//     }))

}