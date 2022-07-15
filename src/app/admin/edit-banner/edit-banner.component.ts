import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/banner';
import { BannerService } from 'src/app/banner.service';

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css'],
})
export class EditBannerComponent implements OnInit {
  banners: Banner[] = [];
  constructor(private bannerService: BannerService) {}

  ngOnInit(): void {
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
