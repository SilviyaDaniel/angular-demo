import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

openProduct(product: string) {
  this.router.navigate(['/product', product.toLowerCase()]);
}
//   products = [
//     {
//       name: 'Ice Cream',
//       image: 'assets/icecream.png'
//     },
//     {
//       name: 'Popsicle',
//       image: 'assets/popsicle.png'
//     }
//   ];
}
