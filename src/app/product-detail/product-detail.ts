import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Pipe } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css']
})
export class ProductDetailComponent {
  productKey='';
  productName = '';
  selectedFlavor = '';
  selectedSize = '';

  flavors = ['prune', 'squash', 'cherry'];
  sizes = ['Small', 'Medium', 'Large'];

  constructor(private route: ActivatedRoute,
    private cartService: CartService
  ) {
    const type = this.route.snapshot.paramMap.get('type')!;
    this.productKey = type.toLowerCase();

    this.productName =
      this.productKey === 'ice-cream' ? 'Ice Cream' : 'Popsicle';
  }

  selectFlavor(flavor: string) {
    this.selectedFlavor = flavor;
  }
  addToCart() {
    //  Auto-pick first size if not selected
    if (!this.selectedSize && this.sizes.length > 0) {
    this.selectedSize = this.sizes[0];
  }
    this.cartService.addToCart({
    productKey: this.productKey,
    productName: this.productName,
    flavor: this.selectedFlavor,
    size: this.selectedSize,
    quantity: 1,
    price: 10
});
  }
}

