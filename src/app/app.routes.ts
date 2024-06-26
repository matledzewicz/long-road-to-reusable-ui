import { Routes } from '@angular/router';
import { ProductDetailPage } from './pages/product-detail/product-detail.page';
import { ProductListPage } from './pages/product-list/product-list.page';
import { ProductTablePage } from './pages/product-table/product-table.page';

export const routes: Routes = [
  {
    path: '',
    component: ProductListPage,
  },
  {
    path: 'product/:id',
    component: ProductDetailPage,
  },
  {
    path: 'product-table',
    component: ProductTablePage,
  },
];
