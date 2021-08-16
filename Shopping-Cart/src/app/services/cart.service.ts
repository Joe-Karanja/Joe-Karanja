import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartItem } from '../models/cart-item';
import { Observable } from 'rxjs';
import { cartUrl } from '../config/api';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]>{
    //TODO: Mapping the obtained result to our CartItem properties. will use(pipe() $ map() functions)
    return this.http.get<CartItem[]>(cartUrl);

  }

  addProductToCart(product: Product): Observable<any>{
    return this.http.post(cartUrl, { product });
  }
}
