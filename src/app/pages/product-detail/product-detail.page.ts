import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  BuyProductDirective,
  ProductDetailComponent,
} from '../../features/products';

@Component({
  selector: '',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent, BuyProductDirective],
  templateUrl: './product-detail.page.html',
})
export class ProductDetailPage {}
