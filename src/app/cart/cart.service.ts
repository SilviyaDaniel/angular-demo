// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from './cart-item.model';

@Injectable({ 
  providedIn: 'root' 
})
export class CartService {

  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();

  private cartOpen = new BehaviorSubject<boolean>(false);
  cartOpen$ = this.cartOpen.asObservable();

  addToCart(item: CartItem) {
    // const items = this.cartItems.value;
    this.cartItems.next([item]);
    this.cartOpen.next(true); 
  }

  closeCart() {
    this.cartOpen.next(false);
  }
}
