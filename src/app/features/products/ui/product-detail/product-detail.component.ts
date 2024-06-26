import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductModel } from '../../app/product.model';
import { ProductService } from '../../data/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent {
  product$: Observable<ProductModel> = this._productService.getOne(
    this._activatedRoute.snapshot.params['id']
  );

  constructor(
    private _productService: ProductService,
    private _activatedRoute: ActivatedRoute
  ) {}
}
