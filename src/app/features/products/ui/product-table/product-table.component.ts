import { CdkTableModule, DataSource } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductModel } from '../../app/product.model';
import { ProductService } from '../../data/product.service';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [CommonModule, CdkTableModule],
  templateUrl: './product-table.component.html',
})
export class ProductTableComponent {
  displayedColumns: string[] = ['title', 'category'];
  datasource = new ExampleDataSource(this._productService);
  constructor(private _productService: ProductService) {}
}

export class ExampleDataSource extends DataSource<ProductModel> {
  /** Stream of data that is provided to the table. */
  data = new BehaviorSubject<ProductModel[]>([]);
  constructor(private _productService: ProductService) {
    super();
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<ProductModel[]> {
    return this._productService.getAll();
  }

  disconnect() {}
}
