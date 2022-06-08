import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css'],
})
export class AdminSigninComponent implements OnInit {
  constructor(private http:HttpClient) {}

  ngOnInit(): void {}
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
    let admin=new Admin(data.firstName,data.lastName,data.email,data.password,data.phone,data.address);
    console.log(admin+"admin");
    console.log(JSON.stringify(admin));
    
    
    this.http.post("http://localhost:8081/api/admin/signin",admin).subscribe((data)=>console.log(data,"inside subscribe method"),error=>console.log(error),()=>console.log("process completed"))
    
  }
}
class Admin{
  
  
   constructor(public firstName:string,public lastName:string,public email:string, public password:string,public phone:string,public address:string ){}
}
