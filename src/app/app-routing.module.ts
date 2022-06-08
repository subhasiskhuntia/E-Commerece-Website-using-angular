import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { AdminComponent } from './admin/admin.component';
import { CategoryWiseProductComponent } from './category-wise-product/category-wise-product.component';
import { GenderWiseProductComponent } from './gender-wise-product/gender-wise-product.component';
import { HomeComponent } from './home/home.component';
import { ProductBrandWiseComponent } from './product-brand-wise/product-brand-wise.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { FilterRouteResolver } from './resolvers/filter.resolver';
import { RouteResolver } from './resolvers/route.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { data: RouteResolver } },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'signin', component: AdminSigninComponent },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouteResolver, FilterRouteResolver],
})
export class AppRoutingModule {}
