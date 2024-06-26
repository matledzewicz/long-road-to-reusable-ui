import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductListComponent } from '../../features/products';

@Component({
  selector: '',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './product-list.page.html',
})
export class ProductListPage {}
