import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/Authentication/login/login.component';
import { RegisterComponent } from './pages/Authentication/register/register.component';
import { AppComponent } from './app.component';
import { ProductListComponent } from './pages/contentpages/product-list/product-list.component';
import { ProductOverviewComponent } from './pages/contentpages/product-overview/product-overview.component';
import { NewProductComponent } from './pages/contentpages/new-product/new-product.component';
import { OrderHistoryComponent } from './pages/contentpages/order-history/order-history.component';
import { OrderSummaryComponent } from './pages/contentpages/order-summary/order-summary.component';
import { ShoppingCartComponent } from './pages/contentpages/shopping-cart/shopping-cart.component';
import { CheckoutFormComponent } from './pages/contentpages/checkout-form/checkout-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'product-over-view/1',
    pathMatch: 'full',
  },
  {
    path: 'product-over-view/:id',
    component: ProductOverviewComponent,
  },
  {
    path: 'new-product',
    component: NewProductComponent,
  },
  {
    path: 'order-summary',
    component: OrderSummaryComponent,
  },
  {
    path: 'product-list',
    component: ProductListComponent,
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
  },
  {
    path: 'order-history',
    component: OrderHistoryComponent,
  },
  {
    path: 'checkout-form',
    component: CheckoutFormComponent,
  },
  // {
  //   path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  // },
];
