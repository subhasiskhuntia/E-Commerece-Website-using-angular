import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Banner } from 'src/app/banner';
import { BannerService } from 'src/app/banner.service';

@Component({
  selector: 'app-add-banner',
  templateUrl: './add-banner.component.html',
  styleUrls: ['./add-banner.component.css'],
})
export class AddBannerComponent implements OnInit {
  image: string = '';
  constructor(private bannerService: BannerService,private router:Router) {}

  ngOnInit(): void {
    if(sessionStorage.getItem("role")!="ROLE_ADMIN"){
      this.router.navigate(["/admin/adminHome"])
    }
  }
  submitBanner() {
    let banner = new Banner(0, this.image);
    this.bannerService.saveBanner(banner).subscribe(
      (result) => alert(result),
      (error) => console.log(error),
      () => (this.image = '')
    );
  }
}
