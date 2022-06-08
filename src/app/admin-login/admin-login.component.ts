import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(public http:HttpClient) { }

  ngOnInit(): void {
  }
  checkAdmin(loginRef: NgForm) {
    let loginValue = loginRef.value;
    let username=loginValue.username;
    let password=loginValue.password;
    console.log(
      username,password
    );
    let login=new Login(username,password);
    this.http.post("http://localhost:8081/api/admin/login",login).subscribe((data)=>console.log(data,"inside subscribe method"),error=>console.log(error),()=>console.log("process completed"))
  }
}
class Login{
  constructor(private email:string,private password:string){}
}

