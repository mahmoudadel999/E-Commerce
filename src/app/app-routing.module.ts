import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { RegisterComponent } from './components/register/register.component';
import { SignoutComponent } from './components/signout/signout.component';
import { NotfoundedComponent } from './components/notfounded/notfounded.component';

const routes: Routes = [
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, title: 'Home' },
      { path: 'cart', component: CartComponent, title: 'Cart' },
      { path: 'products', component: ProductsComponent, title: 'Products' },
      { path: 'brands', component: BrandsComponent, title: 'Brands' },
      {
        path: 'categories',
        component: CategoriesComponent,
        title: 'Categories',
      },
    ],
  },

  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'register', component: RegisterComponent, title: 'Register' },
      { path: 'signout', component: SignoutComponent, title: 'Signout' },
    ],
  },

  { path: '**', component: NotfoundedComponent, title: 'Not Founded' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
