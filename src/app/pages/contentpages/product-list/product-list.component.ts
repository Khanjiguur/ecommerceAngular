import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../../../component/product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { ProductCardWithCartComponent } from '../../../component/product-card-with-cart/product-card-with-cart.component';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, ProductCardWithCartComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getTopRatedProducts().subscribe((data) => {
      this.products = data;
    });
  }

  productsWithCarts = [
    {
      imageUrl:
        'https://verona.primeng.org/assets/demo/images/ecommerce/product-list/product-list-2-1.png',
      productName: 'Product Name 1',
      price: 145.0,
      colors: ['Bluegray', 'Indigo', 'Purple', 'Cyan'],
      selectedColor: 'Bluegray',
    },
    {
      imageUrl:
        'https://verona.primeng.org/assets/demo/images/ecommerce/product-list/product-list-2-2.png',
      productName: 'Product Name 2',
      price: 130.0,
      colors: ['Bluegray', 'Indigo', 'Purple', 'Cyan'],
      selectedColor: 'Indigo',
    },
    {
      imageUrl:
        'https://verona.primeng.org/assets/demo/images/ecommerce/product-list/product-list-2-3.png',
      productName: 'Product Name 3',
      price: 150.0,
      colors: ['Bluegray', 'Indigo', 'Purple', 'Cyan'],
      selectedColor: 'Purple',
    },
    {
      imageUrl:
        'https://verona.primeng.org/assets/demo/images/ecommerce/product-list/product-list-2-4.png',
      productName: 'Product Name 4',
      price: 140.0,
      colors: ['Bluegray', 'Indigo', 'Purple', 'Cyan'],
      selectedColor: 'Cyan',
    },
  ];
}
