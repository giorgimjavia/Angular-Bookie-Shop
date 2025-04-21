import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { booksType } from './book.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSource = new BehaviorSubject<booksType[]>([]);
  cartItems$ = this.cartItemsSource.asObservable();

  private cartItems: booksType[] = [];

  addToCart(book: booksType) {
   const alreadyExists = this.cartItems.some(item => item.id === book.id);

   if (!alreadyExists) {
     this.cartItems.push(book);
     this.cartItemsSource.next(this.cartItems);
   }
  }

  getCartItems() {
    return this.cartItems;
  }

  getCartCount(): number {
    return this.cartItems.length
  }
}
