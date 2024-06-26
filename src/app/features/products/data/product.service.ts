import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../app/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private _httpClient: HttpClient) {}

  getAll() {
    return this._httpClient.get<ProductModel[]>(
      'https://fakestoreapi.com/products'
    );
  }

  getOne(id: number) {
    return this._httpClient.get<ProductModel>(
      `https://fakestoreapi.com/products/${id}`
    );
  }

  create(product: ProductModel) {
    return this._httpClient.post<void>(
      'https://fakestoreapi.com/products',
      product
    );
  }

  buy(id: number) {
    return this._httpClient.patch<void>('https://fakestoreapi.com/products', {
      id,
    });
  }
}
