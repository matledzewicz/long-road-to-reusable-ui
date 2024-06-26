import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../app/product.model';
import { ProductService } from '../data/product.service';
import { BuyProductDirective } from './buy-product/buy-product.directive';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, BuyProductDirective],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  list$: Observable<ProductModel[]> = this._productService.getAll();

  constructor(private _productService: ProductService) {}
}
