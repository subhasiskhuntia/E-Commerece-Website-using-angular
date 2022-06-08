import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Brand } from '../brand;';
import { ProductBrandService } from '../product-brand.service';

@Component({
  selector: 'app-product-brand',
  templateUrl: './product-brand.component.html',
  styleUrls: ['./product-brand.component.css']
})
export class ProductBrandComponent implements OnInit {

  constructor(private pcs:ProductBrandService) { }

  ngOnInit(): void {
  }
  listOfBrand:Brand[]=[];
  saveProductBrand(productBrandRef:NgForm){
    let Brand:Brand=productBrandRef.value;
    console.log(Brand);
    
    this.pcs.saveProductBrand(Brand).subscribe(result=>console.log(result),error=>console.log(error),
    ()=>this.loadProductBrand()
    );
    productBrandRef.reset();
  }
  loadProductBrand(){
    this.pcs.showBrand().subscribe(result=>this.listOfBrand=result,error=>console.log(error),()=>console.log("completed"))
  }

}
