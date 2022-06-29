import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { FilterService } from '../filter.service';
import { FilteringVariable } from '../filtering-variable';
import { GenderWiseProductService } from '../gender-wise-product.service';
import { Product } from '../product';
import { ProductCategoryService } from '../product-category.service';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.css'],
})
export class FilterProductComponent implements OnInit {
  categories: string[] = [];
  brands: string[] = [];
  gender: string[] = ['woman', 'man', 'kid', 'baby'];
  colors: string[] = [];
  filterFormRef!: FormGroup;
  minPrice: number = 0;
  maxPrice: number = 100000;
  search: string = '';
  maximumDiscount: number = 100;
  order: string = 'asc';
  @Output() event = new EventEmitter<Product[]>();
  products: Product[] = [];
  @Input() someInput: string="";

  constructor(
    private catService: ProductCategoryService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private filterService: FilterService,
    private genderService:GenderWiseProductService
  ) {
    this.loadForm();
    // console.log('constructor called');
  }

  ngOnInit(): void {
    this.loadForm();
    // console.log('ngonit called');
  }
  ngOnChanges() {
    console.log(this.someInput);
    this.loadForm();
    //  console.log(this.filterFormRef.value);
    }  
  filterSubmit() {
    let formValue = this.filterFormRef.value;
    let categories = this.convertToValue('category', this.categories);
    let brands = this.convertToValue('brand', this.brands);
    let color = this.convertToValue('color', this.colors);
    let gender = this.convertToValue('gender', this.gender);
    let order = 'asc';
    let discount = 100;
    let minPrice = 0;
    let maxPrice = 100000;
    let searchedItem = '';

    console.log(formValue);
    // console.log(formValue.maxPrice == null);

    if (categories.length == 0) {
      if (sessionStorage.getItem('category') != null) {
        categories = [sessionStorage.getItem('category') + ''];
      } else {
        categories = this.categories;
      }
    }
    if (brands.length == 0) {
      if (sessionStorage.getItem('brand') != null) {
        brands = [sessionStorage.getItem('brand') + ''];
      } else {
        brands = this.brands;
      }
    }
    if (color.length == 0) {
      color = this.colors;
    }
    if (gender.length == 0) {
      if (sessionStorage.getItem('gender') != null) {
        gender = [sessionStorage.getItem('gender') + ''];
      } else {
        gender = this.gender;
      }
    }
    if (formValue.minPrice == null || formValue.minPrice.length == 0) {
      formValue.minPrice = 0;
      minPrice = 0;
    }
    if (formValue.maxPrice == null || formValue.maxPrice.length == 0) {
      formValue.maxPrice = 100000;
      maxPrice = 100000;
    }
    if (formValue.order == 'desc') {
      order = 'desc';
    }
    if (formValue.discount == null || formValue.discount.length == 0) {
      formValue.discount = 100;
      discount = 100;
    }
    if (formValue.minPrice.length != 0) {
      minPrice = Number(formValue.minPrice);
    }
    if (formValue.maxPrice.length != 0) {
      maxPrice = Number(formValue.maxPrice);
    }
    if (formValue.discount.length != 0) {
      discount = Number(formValue.discount);
    }
    // console.log(sessionStorage.getItem("search")+" from filter search");
    if (sessionStorage.getItem('search') != null) {
      searchedItem = sessionStorage.getItem('search') + '';
    }

    // console.log(this.filterFormRef.value);
    // console.log(categories);
    // console.log(brands);
    // console.log(color);
    // console.log(gender);
    // console.log(maxPrice);
    // console.log(minPrice);
    // console.log(discount);
    // console.log(order);
    let data: FilteringVariable = new FilteringVariable(
      brands,
      categories,
      color,
      discount,
      gender,
      maxPrice,
      minPrice,
      order,
      searchedItem
    );
    // console.log(JSON.stringify(data));
    // console.log(data);

    this.filterService.getFilteredData(data).subscribe((result) => {
      this.products = result;
      this.event.emit(this.products);
      console.log(result);
    });
  }
  convertToValue(key: string, originalList: string[]) {
    let selectedItem: string[] = [];
    console.log(key);

    // console.log(this.filterFormRef.value[key][1]);

    for (let i = 0; i < originalList.length; i++) {
      if (this.filterFormRef.value[key][i]) {
        selectedItem.push(originalList[i]);
      }
    }
    return selectedItem;
  }
  loadForm(){
    this.route.data.subscribe((data) => {
      this.categories = data['filteredData']['categoryList']
        .substring(1, data['filteredData']['categoryList'].length - 1)
        .split(', ');
      this.brands = data['filteredData']['brandList']
        .substring(1, data['filteredData']['brandList'].length - 1)
        .split(', ');
      this.colors = data['filteredData']['colorList']
        .substring(1, data['filteredData']['colorList'].length - 1)
        .split(', ');

      // console.log(this.categories);
      // console.log(this.brands);
      // console.log(this.colors);

      this.filterFormRef = this.formBuilder.group({
        category: this.formBuilder.array(
          this.categories.map((x) => {
            if (x == sessionStorage.getItem('category')) {
              return 1;
            }
            return !1;
          })
        ),
        brand: this.formBuilder.array(
          this.brands.map((x) => {
            if (x == sessionStorage.getItem('brand')) {
              return 1;
            }
            return !1;
          })
        ),
        gender: this.formBuilder.array(
          this.gender.map((x) => {
            if (x == sessionStorage.getItem('gender')) {
              return 1;
            }
            return !1;
          })
        ),
        discount: this.formBuilder.control(''),
        maxPrice: this.formBuilder.control(''),
        minPrice: this.formBuilder.control(''),
        color: this.formBuilder.array(this.colors.map((x) => !1)),
        order: this.formBuilder.control(''),
      });
    });
  }
}
