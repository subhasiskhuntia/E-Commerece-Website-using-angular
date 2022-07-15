import { Component, OnInit } from '@angular/core';
import { OrderDetails } from '../order-details';
import { UserService } from '../user.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  orderDetails:OrderDetails[]=[];
  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.getOrderDetails();
  }
  getOrderDetails(){
    this.userService.getOrderDetails().subscribe(result=>this.orderDetails=result
    )
  }
}
