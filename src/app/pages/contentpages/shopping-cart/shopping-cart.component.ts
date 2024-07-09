import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartItemsComponent } from '../../../component/cart-items/cart-items.component';

import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, CartItemsComponent, ButtonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent implements OnInit {
  products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
  ];
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {}

  addToCart(productId: number) {
    this.cartService.addToCart(productId, 1).subscribe(() => {
      console.log('Product added to cart');
    });
  }

  orderCart() {
    this.cartService.orderCart().subscribe(() => {
      console.log('Cart ordered');
      this.router.navigate(['/checkout-form']);
    });
  }
}
