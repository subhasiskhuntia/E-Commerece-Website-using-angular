import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Banner } from 'src/app/banner';
import { BannerService } from 'src/app/banner.service';

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css'],
})
export class EditBannerComponent implements OnInit {
  banners: Banner[] = [];
  constructor(private bannerService: BannerService,private router:Router) {}

  ngOnInit(): void {
    if(sessionStorage.getItem("role")!="ROLE_ADMIN"){
      this.router.navigate(["/admin/adminHome"])
    }
    this.loadBanner();
  }
  loadBanner() {
    this.bannerService
      .showBanner()
      .subscribe((result) => (this.banners = result));
  }
  deleteBanner(id: number) {
    console.log(id);
    this.bannerService.deleteBanner(id).subscribe(
      (result) => console.log(result),
      (error) => console.log(error),
      () => this.loadBanner()
    );
  }
}
