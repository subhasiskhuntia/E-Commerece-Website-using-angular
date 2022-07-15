import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/category;';
import { ProductCategoryService } from 'src/app/product-category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categories:string[]=[];
  suggestedCategories:string[]=[];
  typedCategory:string="";
  constructor(private categoryService:ProductCategoryService) { }

  ngOnInit(): void {
    this.loadCategories();
  }
  saveCategory(categoryRef:NgForm){
    console.log(categoryRef.value);
    let category:Category=new Category(categoryRef.value["name"],0,categoryRef.value["image"]);
    this.categoryService.saveProductCategory(category).subscribe(result=>alert(result),error=>console.log(error),
    ()=>categoryRef.reset()
    
    )
  }

  loadCategories(){
    this.categoryService.loadDistinctCategory().subscribe(result=>this.categories=result);
  }
  showSuggestedCategories() {
    this.suggestedCategories = [];
    this.suggestedCategories = this.categories.filter((category) =>
      category
        ?.trim()
        ?.toLowerCase()
        .includes(this.typedCategory.trim().toLowerCase())
    );
  }
}
