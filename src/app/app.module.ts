import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { ProductBrandComponent } from './product-brand/product-brand.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { FooterComponent } from './footer/footer.component';
import { ProductBrandWiseComponent } from './product-brand-wise/product-brand-wise.component';
import { CategoryWiseProductComponent } from './category-wise-product/category-wise-product.component';
import { GenderWiseProductComponent } from './gender-wise-product/gender-wise-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FilterProductComponent } from './filter-product/filter-product.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminSigninComponent,
    ProductComponent,
    HeaderComponent,
    BannerComponent,
    AdminLoginComponent,
    HomeComponent,
    ProductBrandComponent,
    ProductCategoryComponent,
    FooterComponent,
    ProductBrandWiseComponent,
    CategoryWiseProductComponent,
    GenderWiseProductComponent,
    ProductDetailComponent,
    FilterProductComponent,
    ProductPageComponent,
    UserLoginComponent,
    UserSigninComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
