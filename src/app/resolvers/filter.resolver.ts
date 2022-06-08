import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { forkJoin, map } from 'rxjs';
import { FilterService } from '../filter.service';
import { ProductBrandService } from '../product-brand.service';
import { ProductCategoryService } from '../product-category.service';

@Injectable()
export class FilterRouteResolver implements Resolve<any> {
  constructor(
    private categoryService: ProductCategoryService,
    private brandService: ProductBrandService,
    private filterService:FilterService
  ) {}
  resolve() {
    //    return this.bannerService.showBanner().pipe(
    //        catchError(error=>{return of(null);}) //can write instead of null error:"api failed to load"
    //    );
    //    }
    //    if multiple api is calling happens then
    return forkJoin(
      this.categoryService.distinctCategory(),
      this.brandService.loadDistinctBrand(),
      this.filterService.getDistinctColor()
    ).pipe(
      map((data) => {
        // console.log('data1', data[0]);
        // console.log('data2', data[1]);
        // console.log("data3",data[2]);
        
        return { categoryList: data[0], brandList: data[1] ,colorList:data[2]};
      })
    );
  }
}
