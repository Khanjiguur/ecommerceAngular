import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InplaceModule } from 'primeng/inplace';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [FormsModule, InputTextareaModule, InplaceModule, CommonModule],
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
})
export class NewProductComponent {
  product: Product = new Product();
  addImageUrls: string[] = [];
  cntr: number = 0;
  displayStyle: string = 'block';
  displayStylee: string = 'none';

  constructor(private productService: ProductService) {}

  onSubmit() {
    this.productService.createProduct(this.product).subscribe((response) => {
      console.log('Product created:', response);
    });
  }

  addInput() {
    this.addImageUrls.push(this.product.imageUrls[this.cntr]);
    if (this.cntr < 3) {
      this.cntr++;
      this.product.imageUrls.push('');
      console.log(this.product.imageUrls[this.cntr] + 'r zurag');
    } else {
      this.displayStylee = 'none';
      console.log(this.product.imageUrls);
    }
  }

  uploadImage() {
    console.log(this.product.imageUrls);
    this.cntr = 0;
    this.product.imageUrls = [''];
    this.displayStyle = 'none';
    this.displayStylee = 'block';
  }
}
