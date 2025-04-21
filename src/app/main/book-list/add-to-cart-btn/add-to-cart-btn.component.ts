import { Component, Input, inject, signal } from '@angular/core';
import { BookDataService } from '../../../book-data.service';
import { booksType } from '../../../book.model';
import { CartService } from '../../../cart.service'; // ← Import the new service

@Component({
  selector: 'app-add-to-cart-btn',
  standalone: true,
  imports: [],
  templateUrl: './add-to-cart-btn.component.html',
  styleUrl: './add-to-cart-btn.component.css'
})
export class AddToCartBtnComponent {
  @Input() bookId!: number;

  private bookService = inject(BookDataService);
  private cartService = inject(CartService);

  books = signal<booksType[]>(this.bookService.booksData);

  btnText: string = 'ADD TO CART';
  check: boolean = false;

  bookAdd(bookId: number) {
    const book = this.bookService.booksData.find(book => book.id === bookId);
    console.log(book);

    if (book) {
      this.cartService.addToCart(book);
      this.cartService.getCartCount();


      if (!this.check) {
        this.btnText = 'ADDED ✓';
        this.check = true;

        setTimeout(() => {
          this.btnText = 'ADD TO CART';
          this.check = false;
        }, 1000);
      }
    }
  }
}
