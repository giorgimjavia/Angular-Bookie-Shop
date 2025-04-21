import { Component } from '@angular/core';
import { booksType } from '../../book.model';
import { CartService } from '../../cart.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {     
  cartCount: number = 0;
  
  constructor(private cartService: CartService) {}
  
  ngOnInit() {
    this.cartService.cartItems$.subscribe(items => {
    
      this.cartCount = items.length
    });
  }
}
