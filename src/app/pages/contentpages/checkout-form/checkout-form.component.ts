import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PrimeIcons } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-checkout-form',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    InputNumberModule,
    FormsModule,
    TabViewModule,
  ],
  templateUrl: './checkout-form.component.html',
  styleUrl: './checkout-form.component.css',
})
export class CheckoutFormComponent implements OnInit {
  items: MenuItem[] | undefined;
  images: string[] = [];
  selectedImage: string | undefined;
  home: MenuItem | undefined;
  value1: number = 1;
  constructor(private imageService: AuthService) {}
  ngOnInit() {
    this.images = this.imageService.getImages();
    this.selectedImage = this.images[0];
    this.items = [
      {
        label: 'Product Overview',
      },
    ];
  }

  selectImage(image: string): void {
    this.selectedImage = image;
  }
}
