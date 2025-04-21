import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { booksType } from '../../book.model';
import { AddToCartBtnComponent } from "./add-to-cart-btn/add-to-cart-btn.component";
import { BookDataService } from '../../book-data.service';
import { CurrencyPipe,TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [AddToCartBtnComponent, TitleCasePipe, CurrencyPipe],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  @Input() book!: booksType;

}
