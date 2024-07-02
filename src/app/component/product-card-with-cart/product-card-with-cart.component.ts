import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-card-with-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card-with-cart.component.html',
  styleUrl: './product-card-with-cart.component.css',
})
export class ProductCardWithCartComponent implements OnInit {
  @Input() product: Product = new Product();
  colors: string[] = ['Cyan', 'Indigo', 'Purple', 'Bluegrey'];
  @Input() selectedColor: string | undefined;
  selectedColorName: string | undefined;
  image: any;

  ngOnInit(): void {
    this.selectedColorName = this.selectedColor || this.colors[0];
    this.image = this.product.imageUrls ? this.product.imageUrls[0] : '';
  }
  constructor(private router: Router) {}
  onColorClick(color: string) {
    this.selectedColorName = color;
  }
  navigateToCheckOutForm(): void {
    this.router.navigate(['/product-over-view', this.product.id]);
  }
  addToCart() {
    this.router.navigate(['/shopping-cart']);
  }
}
