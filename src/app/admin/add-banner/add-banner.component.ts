import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/banner';
import { BannerService } from 'src/app/banner.service';

@Component({
  selector: 'app-add-banner',
  templateUrl: './add-banner.component.html',
  styleUrls: ['./add-banner.component.css'],
})
export class AddBannerComponent implements OnInit {
  image: string = '';
  constructor(private bannerService: BannerService) {}

  ngOnInit(): void {}
  submitBanner() {
    let banner = new Banner(0, this.image);
    this.bannerService.saveBanner(banner).subscribe(
      (result) => alert(result),
      (error) => console.log(error),
      () => (this.image = '')
    );
  }
}
