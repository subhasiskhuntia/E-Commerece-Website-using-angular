import { Component, OnInit } from '@angular/core';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { ProductService } from 'src/app/product.service';
Chart.register(...registerables);

@Component({
  selector: 'app-brand-sale-chart',
  templateUrl: './brand-sale-chart.component.html',
  styleUrls: ['./brand-sale-chart.component.css']
})
export class BrandSaleChartComponent implements OnInit {

  ifLoggedIn: boolean = true;
  labels: string[] = [];
  sales: string[] = [];

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit() {
    if(sessionStorage.getItem("role")!="ROLE_ADMIN"){
      this.router.navigate(["/admin/adminHome"])
    }
    // if (sessionStorage.getItem('admin') == 'true') {
      // this.ifLoggedIn = true;
      this.loadData();
    // } else {
    //   this.router.navigate(['/admin/signin']);
    // }
  }
  loadChart() {
    var myChart = new Chart('myChart1', {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'No of Sales',
            data: this.sales,
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  show() {
    var myChart = new Chart('myChart1', {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'No of Sales',
            data: this.sales,
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  loadData() {
    this.productService.getSalesInBrand().subscribe(
      (result) => {
        for (let i = 0; i < result.length; i++) {
          this.labels.push(result[i]['Brand']);
          this.sales.push(result[i]['Sales']);
        }
        console.log(this.labels);
        console.log(this.sales);
      },
      (error) => console.log(error),
      () => this.loadChart()
    );
  }
}
