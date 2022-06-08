import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Banner } from '../banner';
import { BannerService } from '../banner.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private bs: BannerService) {}
  message: string = '';

  ngOnInit(): void {this.loadBanner()}


  banners:Banner[]=[];
  saveBanner(bannerRef: NgForm) {
    let banner: Banner = new Banner(0, bannerRef.value.url);
    console.log(banner);
    this.bs.saveBanner(banner).subscribe(
      (result) => {
        this.message = result;
        console.log(this.message);
      },
      (error) => console.log(error),
      () => {
        this.loadBanner();
      }
    );
    bannerRef.reset();
  }
  loadBanner() {
    this.bs.showBanner().subscribe(result=>this.banners=result,error=>console.log(error),()=>console.log("completed"))
  }
  deleteBanner(id:number){
    console.log("inside delete banner function");
    
    this.bs.deleteBanner(id).subscribe(result=>console.log(result),error=>console.log(error),()=>this.loadBanner()
    )
  }
}
