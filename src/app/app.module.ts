import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete"
import {MatIconModule} from "@angular/material/icon"
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatSlideToggleModule} from "@angular/material/slide-toggle"
import {MatDatepickerModule} from "@angular/material/datepicker"
import {MatListModule} from '@angular/material/list';
import {MatCardModule, MatCardTitle} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { BasicAuthHtppInterceptorService } from './basic-auth-htpp-interceptor-service.service';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { EditBannerComponent } from './admin/edit-banner/edit-banner.component';
import { AddBannerComponent } from './admin/add-banner/add-banner.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { EditCategoryComponent } from './admin/edit-category/edit-category.component';
import { AddBrandComponent } from './admin/add-brand/add-brand.component';
import { EditBrandComponent } from './admin/edit-brand/edit-brand.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { AdminNavigationBarComponent } from './admin/admin-navigation-bar/admin-navigation-bar.component';
import { AdminDashBoardComponent } from './admin/admin-dash-board/admin-dash-board.component';
import { ChartComponent } from './admin/chart/chart.component';
import { BrandSaleChartComponent } from './admin/brand-sale-chart/brand-sale-chart.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminHomePageComponent } from './admin/admin-home-page/admin-home-page.component';
import { ProductSalesWithInIntervalComponent } from './admin/product-sales-with-in-interval/product-sales-with-in-interval.component';
import {DatePipe} from '@angular/common';
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
    ShoppingCartComponent,
    OrderDetailsComponent,
    AddProductComponent,
    EditProductComponent,
    EditBannerComponent,
    AddBannerComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    AddBrandComponent,
    EditBrandComponent,
    SidebarComponent,
    AdminNavigationBarComponent,
    AdminDashBoardComponent,
    ChartComponent,
    BrandSaleChartComponent,
    UserProfileComponent,
    AdminHomePageComponent,
    ProductSalesWithInIntervalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthHtppInterceptorService,
      multi: true,
    },
    DatePipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
