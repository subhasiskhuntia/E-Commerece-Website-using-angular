import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../category;';
import { ProductCategoryService } from '../product-category.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  constructor(private pcs:ProductCategoryService) { }

  ngOnInit(): void {
    this.loadProductCategory();
  }

  listOfCategory:Category[]=[];
  saveProductCategory(productCategoryRef:NgForm){
    let category:Category=productCategoryRef.value;
    console.log(category);
    
    this.pcs.saveProductCategory(category).subscribe(result=>console.log(result),error=>console.log(error),
    ()=>this.loadProductCategory()
    );
    productCategoryRef.reset();
  }
  loadProductCategory(){
    this.pcs.showCategory().subscribe(result=>this.listOfCategory=result,error=>console.log(error),()=>console.log("completed"))
  }

}
