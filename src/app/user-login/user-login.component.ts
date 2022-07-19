import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  constructor(private http: HttpClient, private userService: UserService,private router:Router) {}

  ngOnInit(): void {}
  checkAdmin(loginRef: NgForm) {
    let loginValue = loginRef.value;
    let username = loginValue.username;
    let password = loginValue.password;
    console.log(username, password);
    let login = new User('', '', username, password, '', '');
    this.userService.userLogIn(login).subscribe(
      (data) => {
        console.log(JSON.parse(data));
        let userName=JSON.parse(data).userName;
        let token=JSON.parse(data).token
        let firstName=JSON.parse(data).firstName
        let role=JSON.parse(data).role;
        sessionStorage.setItem("userName",userName)
        sessionStorage.setItem("token","Bearer "+token)
        sessionStorage.setItem("firstName",firstName);
        sessionStorage.setItem("role",role);
        if(firstName!=null){
          history.back();
        }
      },
      (error) => console.log(error),
      () => console.log('process completed')
    );
  }
}
