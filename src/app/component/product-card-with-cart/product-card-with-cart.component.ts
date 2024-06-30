import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card-with-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card-with-cart.component.html',
  styleUrl: './product-card-with-cart.component.css',
})
export class ProductCardWithCartComponent implements OnInit {
  @Input() imageUrl: string | undefined;
  @Input() productName: string | undefined;
  @Input() price: number | undefined;
  @Input() colors: string[] = [];
  @Input() selectedColor: string | undefined;
  selectedColorName: string | undefined;

  ngOnInit(): void {
    this.selectedColorName = this.selectedColor;
  }

  onColorClick(color: string) {
    this.selectedColorName = color;
  }
}
