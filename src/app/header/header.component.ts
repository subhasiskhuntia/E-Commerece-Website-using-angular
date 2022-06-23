import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticatedResponse } from '../authenticated-response';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loggedInOrNot: boolean = sessionStorage.getItem('userName') == null;
  username: string | null = sessionStorage.getItem('firstName');
  @Input() cartItemNumber: number | null = null;
  constructor(
    private router: Router,
    private cartService: CartService,
    private userService: UserService
  ) {}

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
    if(sessionStorage.getItem("token")!=null){

      this.cartService.loadCartItem().subscribe(
        (result) => {
        this.cartItemNumber = result.cartItems.length;
      },

      (error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401 && sessionStorage.getItem("token")!=null) {
            // this.router.navigate(['login']);
            // console.log("401 error");
            this.userService.refreshToken().subscribe(
              (result) => {
                let token: AuthenticatedResponse = JSON.parse(
                  JSON.stringify(result)
                );
                // console.log(token.token);
                let refreshToken = 'Bearer ' + token.token;

                sessionStorage.setItem('token', refreshToken);
              },
              (error) => console.log(error),
              () => this.totalCartItem()
              );
            }
          }
        }
        );
      }
  }
  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('firstName');
    this.reloadComponent();
  }
  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
}
