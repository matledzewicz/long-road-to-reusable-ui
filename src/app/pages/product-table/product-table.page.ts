import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductTableComponent } from '../../features/products';

@Component({
  selector: '',
  standalone: true,
  imports: [CommonModule, ProductTableComponent],
  templateUrl: './product-table.page.html',
})
export class ProductTablePage {}
