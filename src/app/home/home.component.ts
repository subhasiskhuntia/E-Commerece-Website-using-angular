import { Component, OnInit } from '@angular/core';
import { Brand } from '../brand;';
import { Category } from '../category;';
import { ProductBrandWiseService } from '../product-brand-wise.service';
import { ProductBrandWiseComponent } from '../product-brand-wise/product-brand-wise.component';
import { ProductBrandService } from '../product-brand.service';
import { ProductCategoryService } from '../product-category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private pcs:ProductCategoryService,private pbs:ProductBrandService) { }

  ngOnInit(): void {
    this.loadCategory();
    this.loadBrand();
  }
  brands:Brand[]=[];
  category:Category[]=[];
  loadCategory(){
    this.pcs.showCategory().subscribe(result=>this.category=result,error=>console.log(error),()=>console.log("category loading completed"))
  }
  loadBrand(){
    this.pbs.showBrand().subscribe(result=>{this.brands=result;
      sessionStorage.removeItem("search")
      // console.log(sessionStorage.getItem("search")+"sessionStorage");
    },error=>console.log(error),()=>console.log("brand loading completed"))
  }

}
