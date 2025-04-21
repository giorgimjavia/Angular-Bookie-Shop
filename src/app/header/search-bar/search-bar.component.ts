import { Component, inject, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookDataService } from '../../book-data.service';
import { booksType } from '../../book.model';


@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Input() bookId!: number;
}
