import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/category;';
import { ProductCategoryService } from 'src/app/product-category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent implements OnInit {
  categories: Category[] = [];
  image: string = '';
  name: string = '';
  selectedCategory: number = -1;
  constructor(private categoryService: ProductCategoryService,private router:Router) {}

  ngOnInit(): void {
    if(sessionStorage.getItem("role")!="ROLE_ADMIN"){
      this.router.navigate(["/admin/adminHome"])
    }
    this.loadCategory();
  }
  loadCategory() {
    this.categoryService
      .showCategory()
      .subscribe((result) => (this.categories = result));
  }
  editCategory(id: number, category: Category) {
    this.selectedCategory = id;
    this.image = category.url;
  }
  updateCategory(category: Category) {
    category.url = this.image;
    this.categoryService
      .updateCategory(category)
      .subscribe((result) => console.log(result));
    this.image = '';
    this.selectedCategory = -1;
  }
  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe(
      (result) => console.log(result),
      (error) => console.log(error),
      () => this.loadCategory()
    );
  }
}
