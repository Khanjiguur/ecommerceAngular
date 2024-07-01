import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { AuthService } from '../../../services/auth.service';
import { Input } from '@angular/core';
import { Product } from '../../../models/product';
<<<<<<< HEAD
import { ButtonModule } from 'primeng/button';
=======
>>>>>>> origin/main
@Component({
  selector: 'app-checkout-form',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    InputNumberModule,
    FormsModule,
    TabViewModule,
<<<<<<< HEAD
    ButtonModule,
=======
>>>>>>> origin/main
  ],
  templateUrl: './checkout-form.component.html',
  styleUrl: './checkout-form.component.css',
})
export class CheckoutFormComponent implements OnInit {
  images: string[] = [];
  selectedImage: string | undefined;
  @Input() product: Product = new Product();
  constructor(private imageService: AuthService) {}
  ngOnInit() {
    this.images = this.imageService.getImages();
    this.selectedImage = this.images[0];
  }

  selectImage(image: string): void {
    this.selectedImage = image;
  }
}
