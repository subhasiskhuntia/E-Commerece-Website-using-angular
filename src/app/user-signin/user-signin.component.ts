import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {

  constructor(private http:HttpClient,private userService:UserService) { }

  ngOnInit(): void {
  }
  
  formSignIn = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.{5,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$'),
    ]),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  submitAdmin(){
    console.log(this.formSignIn);
    console.log(this.formSignIn.value);
    let data=this.formSignIn.value;
    let user=new User(data.firstName,data.lastName,data.email,data.password,data.phone,data.address);
    console.log(user+"user");
    console.log(JSON.stringify(user));
    
    
    this.userService.userSignIn(user).subscribe((data)=>console.log(data,"inside subscribe method"),error=>console.log(error),()=>console.log("process completed"))
    
  }
}




