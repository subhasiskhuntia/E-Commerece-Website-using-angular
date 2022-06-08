import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Banner } from '../banner';
import { BannerService } from '../banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  bannerList:Banner[]=[];
  constructor(private bs:BannerService,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.data.subscribe(data=>{
      // console.log(data);
      this.bannerList=data['data'];
      // console.log(this.bannerList);
      
      
           
    })
  }

  ngOnInit(): void {
    this.autoSlide();
  }
  
  currentBanner!: string;
  dotClicked:boolean=false;
  currentSlide(bannerUrl: string) {
    // console.log(this.bannerList);
    this.dotClicked=true;
    this.currentBanner= bannerUrl;
    // console.log(this.currentBanner);
  }
  autoSlide(i:number=0){
    if(i>=this.bannerList.length){
      i=0;
    }
      this.currentBanner=this.bannerList[i].url;
      setTimeout(() => {
        if(this.dotClicked==false){
        this.autoSlide(i+1)
        }
      }, 5000);
  }
}
