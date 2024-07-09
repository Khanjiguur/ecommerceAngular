import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartDetails } from '../../models/cart-details';

@Component({
  selector: 'app-cart-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.css',
})
export class CartItemsComponent implements OnInit {
  @Input() product: Product = new Product();
  @Input() cart: CartDetails = new CartDetails();
  image: any;
  counter: number = 1;
  ngOnInit() {
    this.image = this.product.imageUrls ? this.product.imageUrls[0] : '';
  }

  increment() {
    this.counter++;
  }

  decrement() {
    if (this.counter > 1) this.counter--;
  }
}
