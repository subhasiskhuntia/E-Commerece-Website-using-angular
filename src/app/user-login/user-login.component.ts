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
        console.log(data, 'inside subscribe method');
        let userName=JSON.parse(data).userName;
        let token=JSON.parse(data).token
        sessionStorage.setItem("userName",userName)
        sessionStorage.setItem("token","Bearer "+token)
        if(data.startsWith("Welcome")){
          sessionStorage.setItem("userId",data[7]);
          console.log(data);
          sessionStorage.setItem("username",data.slice(8,data.length));
          // const lastNav=this.router.getLastSuccessfullNavigation();
          // this.router.navigate(["/"])
          history.back();
        }
      },
      (error) => console.log(error),
      () => console.log('process completed')
    );
  }
}
