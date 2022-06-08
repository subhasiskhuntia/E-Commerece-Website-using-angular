import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  searchItem="../";
  constructor(private http: HttpClient,private route:ActivatedRoute,private router:Router) {
    this.route.params.subscribe(result=>{
      console.log(result);
      this.searchItem=result["search"];
      this.loadSearchedProduct();
      
    })
  }

  ngOnInit(): void {
    this.loadSearchedProduct();
  }
  products: Product[] = [];

  receiveFilteredProduct($event:any){
    this.products=$event;
    console.log(this.products);
    console.log("from event emiiter");
    
    
  }

  loadSearchedProduct() {
    // let searchedItem = sessionStorage.getItem('search');
    sessionStorage.removeItem("gender");
    sessionStorage.removeItem("category");
    sessionStorage.removeItem("brand");
    this.http
      .get<Product[]>(
        'http://localhost:8081/products/searchProduct?item=' + this.searchItem
      )
      .subscribe(
        (result) => {
          this.products = result;
          console.log(result);
          let value=sessionStorage.getItem("search")
          console.log(value+"searched Item");
          
          if(result.length==0){
            console.log("inside the empty");
            
            this.router.navigate(["/"])
          }
        },
        (error) => console.log(error),
        () => console.log('completed')
      );
  }
}
