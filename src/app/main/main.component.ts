import { Component, inject, signal} from '@angular/core';
import { BookListComponent } from './book-list/book-list.component';
import { booksType } from '../book.model';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BookListComponent],
  providers: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {
  constructor() {}

  private bookService = inject(BookDataService);
  
  books = signal<booksType[]>(this.bookService.booksData)
}
