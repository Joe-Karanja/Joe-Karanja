import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product(1, 'Product 1','This is the product 1 desription. The product is really cool!', 100),
    new Product(2, 'Product 2','This is the product 2 desription. The product is really cool!', 150),
    new Product(3, 'Product 3','This is the product 3 desription. The product is really cool!', 50),
    new Product(4, 'Product 4','This is the product 4 desription. The product is really cool!', 200),
    new Product(5, 'Product 5','This is the product 5 desription. The product is really cool!', 100),
    new Product(6, 'Product 6','This is the product 6 desription. The product is really cool!', 150),
    new Product(7, 'Product 7','This is the product 7 desription. The product is really cool!', 250),
    new Product(8, 'Product 8','This is the product 8 desription. The product is really cool!', 350),
    new Product(9, 'Product 9','This is the product 9 desription. The product is really cool!', 300),
   
  ]

  constructor() { }

  getProducts(): Product[]{
    //TODO: Populate products from an API an return an Observable
    return this.products
  }
}

