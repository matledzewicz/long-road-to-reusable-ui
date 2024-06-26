import { Directive, HostListener, Input } from '@angular/core';
import { ProductService } from '../../data/product.service';

@Directive({
  selector: '[appBuyProduct]',
  standalone: true,
})
export class BuyProductDirective {
  @Input('appBuyProduct') productId!: number;

  constructor(private _productService: ProductService) {}

  @HostListener('click') buyProduct() {
    this._productService.buy(this.productId).subscribe();
  }
}
