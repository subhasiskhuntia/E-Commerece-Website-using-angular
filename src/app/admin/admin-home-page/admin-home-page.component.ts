import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {
  admin:boolean=false;
  constructor() { }

  ngOnInit(): void {
    if(sessionStorage.getItem("role")=="ROLE_ADMIN"){
      this.admin=true;
    }
    else{
      this.admin=false;
    }
  }

}
