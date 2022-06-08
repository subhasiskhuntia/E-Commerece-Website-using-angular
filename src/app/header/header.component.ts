import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  searchBox(searchRef:NgForm){
    console.log(searchRef.value);
    sessionStorage.setItem("search",searchRef.value.search);
    // console.log(sessionStorage.getItem("search")+" from sessionStorage");
    this.router.navigate(["/productPage/"+searchRef.value.search])
    searchRef.reset();
    
  }

}
