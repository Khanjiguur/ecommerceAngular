import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginData } from '../login-data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = '';

  constructor(private http: HttpClient) {}

  register(loginData: LoginData): Observable<any> {
    return this.http.post<any>(this.apiUrl, loginData);
  }
  getImages(): string[] {
    return [
      'https://verona.primeng.org/assets/demo/images/ecommerce/productoverview/product-overview-3-1.png',
      'https://verona.primeng.org/assets/demo/images/ecommerce/productoverview/product-overview-3-2.png',
      'https://verona.primeng.org/assets/demo/images/ecommerce/productoverview/product-overview-3-3.png',
      'https://verona.primeng.org/assets/demo/images/ecommerce/productoverview/product-overview-3-4.png',
    ];
  }
}
