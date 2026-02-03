import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../cart-item.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-popup.component.html',
  styleUrls: ['./cart-popup.component.css']
})
export class CartPopupComponent {
  cartItems: CartItem[] = [];
  isOpen = false;

  constructor(private cartService: CartService, private router: Router) {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });

    this.cartService.cartOpen$.subscribe(open => {
      this.isOpen = open;
    });
  }
  goToCheckout() {
  this.cartService.closeCart();
  this.router.navigate(['/billing']);
}
  close() {
    this.cartService.closeCart();
  }
}
