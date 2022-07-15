import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { AddBannerComponent } from './admin/add-banner/add-banner.component';
import { AddBrandComponent } from './admin/add-brand/add-brand.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AdminComponent } from './admin/admin.component';
import { BrandSaleChartComponent } from './admin/brand-sale-chart/brand-sale-chart.component';
import { ChartComponent } from './admin/chart/chart.component';
import { EditBannerComponent } from './admin/edit-banner/edit-banner.component';
import { EditBrandComponent } from './admin/edit-brand/edit-brand.component';
import { EditCategoryComponent } from './admin/edit-category/edit-category.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { CategoryWiseProductComponent } from './category-wise-product/category-wise-product.component';
import { GenderWiseProductComponent } from './gender-wise-product/gender-wise-product.component';
import { HomeComponent } from './home/home.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ProductBrandWiseComponent } from './product-brand-wise/product-brand-wise.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { FilterRouteResolver } from './resolvers/filter.resolver';
import { RouteResolver } from './resolvers/route.resolver';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSigninComponent } from './user-signin/user-signin.component';

const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { data: RouteResolver } },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'addProduct', component: AddProductComponent },
      { path: 'editProduct', component: EditProductComponent },
      { path: 'addCategory', component: AddCategoryComponent },
      { path: 'editCategory', component: EditCategoryComponent },
      { path: 'addBanner', component: AddBannerComponent },
      { path: 'editBanner', component: EditBannerComponent },
      { path: 'addBrand', component: AddBrandComponent },
      { path: 'editBrand', component: EditBrandComponent },
      {path:"chart",component:ChartComponent},
      {path:"brandSale",component:BrandSaleChartComponent}
    ],
  },
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'admin/signin', component: AdminSigninComponent },
  {
    path: 'products/brands/:id',
    component: ProductBrandWiseComponent,
    resolve: { filteredData: FilterRouteResolver },
  },
  {
    path: 'products/category/:id',
    component: CategoryWiseProductComponent,
    resolve: { filteredData: FilterRouteResolver },
  },
  {
    path: 'products/gender/:id',
    component: GenderWiseProductComponent,
    pathMatch: 'full',
    resolve: { filteredData: FilterRouteResolver },
  },
  { path: 'product/details/:id', component: ProductDetailComponent },
  {
    path: 'productPage/:search',
    component: ProductPageComponent,
    resolve: { filteredData: FilterRouteResolver },
  },
  {
    path: 'login',
    component: UserLoginComponent,
  },
  {
    path: 'signin',
    component: UserSigninComponent,
    pathMatch: 'full',
  },
  {
    path: 'cart',
    component: ShoppingCartComponent,
  },
  {
    path: 'orderDetails',
    component: OrderDetailsComponent,
  },
  {
    path:"userProfile",
    component:UserProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouteResolver, FilterRouteResolver],
})
export class AppRoutingModule {}
