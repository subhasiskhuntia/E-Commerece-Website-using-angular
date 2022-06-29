import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenderWiseProductService } from '../gender-wise-product.service';
import { Product } from '../product';

@Component({
  selector: 'app-gender-wise-product',
  templateUrl: './gender-wise-product.component.html',
  styleUrls: ['./gender-wise-product.component.css'],
})
export class GenderWiseProductComponent implements OnInit {
  genderId: number = 2;
  inputValue:string="";
  constructor(
    private route: ActivatedRoute,
    private genderService: GenderWiseProductService
  ) {
    route.params.subscribe(
      (params) => {
        this.genderId = Number(params['id']);
        this.loadProducts();
        // this.inputValue=this.genderId+"";
      },
      (error) => console.log(error),
      () => {
        console.log('calling loadProduct method');
      }
    );
  }
  ngOnInit(): void {
    this.loadProducts();
  }
  products: Product[] = [];
  receiveFilteredProduct($event:any){
    this.products=$event;
    // console.log(this.products);
    // console.log("from event emiiter");
    
    
  }
  loadProducts() {
    sessionStorage.removeItem("search");
    sessionStorage.removeItem("brand");
    sessionStorage.removeItem("category");
    this.genderService.loadProductGenderWise(this.genderId).subscribe(
      (result) => {
        (this.products = result),
        // console.log(this.products);
        this.inputValue=this.products[0].gender.gender;
        sessionStorage.setItem("gender",this.products[0].gender.gender);
      },
      (error) => console.log(error),
      () => console.log('completed')
    );
    // console.log(this.genderId);
  }
}
