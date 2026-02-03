import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CartPopupComponent } from './cart/cart-popup/cart-popup.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CartPopupComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
