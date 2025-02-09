import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ChildViewComponent } from './child-view/child-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      text: 'Home'
    }
  },
  {
    path: 'all-products',
    component: AllProductsComponent,
    data: {
      text: 'All Products'
    }
  },
  {
    path: 'product-details',
    component: ProductDetailsComponent,
    data: {
      text: 'Product Details'
    }
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
    data: {
      text: 'Shopping Cart'
    }
  },
  {
    path: 'child-view',
    component: ChildViewComponent,
    data: {
      text: 'Child View'
    }
  },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
