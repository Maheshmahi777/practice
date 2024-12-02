import { Injectable } from '@angular/core';
import { IProducts } from './catalog/products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: IProducts[] = [];

  constructor() {}

  add(product: IProducts) {
    this.cart.push(product);
    console.log(`product ${product.name} has been added to cart`);
  }
}
