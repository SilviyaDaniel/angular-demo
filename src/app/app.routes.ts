import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ProductDetailComponent } from './product-detail/product-detail';
import { BillingComponent } from './billing/billing.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'product/:type', component: ProductDetailComponent },
  { path: 'billing', component: BillingComponent },
  { path: '**', redirectTo: '' }

];
