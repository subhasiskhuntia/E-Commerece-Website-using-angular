import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user!: User;
  username: any = sessionStorage.getItem('username');
  disabled: boolean = true;
  firstName: string = '';
  lastName: string = '';
  mobileNumber: string = '';
  address: string = '';
  oldPassword: string = '';
  newPassword: string = '';
  typedPassword = '';
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('userName') != null) {
      this.loadUser();
    } else {
      this.router.navigate(['/login']);
    }
  }
  loadUser() {
    // console.log(this.username);

    this.userService.getUserDetails().subscribe((result) => {
      this.user = result;
      this.firstName = this.user.first_name;
      this.address = this.user.address;
      this.mobileNumber = this.user.phoneNumber;
      this.lastName = this.user.last_name;
    });
  }
  logout() {
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem("token");
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
  editProfile() {
    this.disabled = false;
  }
  submitChanges() {
    // this.disabled = true;
  }
  changeUserDetails() {
    console.log(this.user);
    let user: User = new User(
      this.firstName,
      this.lastName,
      this.user.username,
      this.typedPassword,
      this.mobileNumber,
      this.address,
      null,
      "",
      this.user.id
    );
    this.userService.changeUserDetails(user).subscribe(
      (result) => console.log(result),
      (error) => console.log(error),
      () => {
        this.loadUser();
        this.typedPassword = '';
        this.disabled=true;
        document.getElementById("closeUserDetailsChanger")!.click();
      }
    );
  }
  changePassword() {
    this.userService
      .changePassword(this.oldPassword, this.newPassword)
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error),
        () => {
          this.oldPassword = '';
          this.newPassword = '';
          document.getElementById("closePasswordChanger")!.click();
        }
      );
  }

}
