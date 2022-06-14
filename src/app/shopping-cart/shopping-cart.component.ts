import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ShoppingCart } from '../shopping-cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.loadCartItems();
  }
  cart!: ShoppingCart;
  loadCartItems(){
    this.cartService.loadCartItem().subscribe(result=>{
      console.log(result);
      this.cart=result;
      
    })
  }

}
