import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-sales-with-in-interval',
  templateUrl: './product-sales-with-in-interval.component.html',
  styleUrls: ['./product-sales-with-in-interval.component.css']
})
export class ProductSalesWithInIntervalComponent implements OnInit {
  startDate!: Date;
  endDate!:Date;
  sales:any[]=[];
  showTable:boolean=false;
  constructor(private router:Router,private datePipe:DatePipe,private productService:ProductService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("role")!="ROLE_ADMIN"){
      this.router.navigate(["/admin/adminHome"])
    }
  }
  showSales(){
    let url:string= 'http://localhost:8081/api/admin/salesFromTill/' +
      this.datePipe.transform(this.startDate, 'yyyy-MM-dd')+"/"+
      this.datePipe.transform(this.endDate,"yyyy-MM-dd");
    this.productService.sales(url).subscribe(result=>{
      console.log(result);
      this.sales=result;
      this.showTable=true;
    }
    )
    console.log(url);
    
  }

}
