import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loggedInOrNot: boolean = sessionStorage.getItem('userId') == null;
  username: string | null = sessionStorage.getItem('username');
  cartItemNumber: number | null = null;
  constructor(private router: Router, private cartService: CartService) {
    console.log(this.loggedInOrNot);
    console.log(this.username);
  }

  ngOnInit(): void {
    this.totalCartItem();
  }
  searchBox(searchRef: NgForm) {
    console.log(searchRef.value);
    sessionStorage.setItem('search', searchRef.value.search);
    // console.log(sessionStorage.getItem("search")+" from sessionStorage");
    this.router.navigate(['/productPage/' + searchRef.value.search]);
    searchRef.reset();
  }
  totalCartItem() {
    this.cartService.loadCartItem().subscribe((result) => {
      this.cartItemNumber = result.cartItems.length;
      console.log(this.cartItemNumber);
      console.log(result);
      
      
    });
  }
}