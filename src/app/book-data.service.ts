import { Injectable } from '@angular/core';
import { booksType } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {
    
  public booksData: booksType[] = 
  [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 12.99, img: 'books-images/1.jpg' },
    { id: 2, title: "1984", author: 'George Orwell', price: 10.99, img: 'books-images/2.jpg' },
    { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen', price: 9.99, img: 'books-images/3.jpg' },
    { id: 4, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 11.49, img: 'books-images/4.jpg' },
    { id: 5, title: 'Moby Dick', author: 'Herman Melville', price: 13.75, img: 'books-images/5.jpg' },
    { id: 6, title: 'War and Peace', author: 'Leo Tolstoy', price: 14.99, img: 'books-images/6.jpg' },
    { id: 7, title: 'The Catcher in the Rye', author: 'J.D. Salinger', price: 10.25, img: 'books-images/7.jpg' },
    { id: 8, title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 12.35, img: 'books-images/8.jpg' },
    { id: 9, title: 'Jane Eyre', author: 'Charlotte Brontë', price: 10.99, img: 'books-images/9.png' },
    { id: 10, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', price: 13.99, img: 'books-images/10.png' },
    { id: 11, title: 'Brave New World', author: 'Aldous Huxley', price: 11.75, img: 'books-images/11.jpg' },
    { id: 12, title: 'Wuthering Heights', author: 'Emily Brontë', price: 9.49, img: 'books-images/12.jpg' },
    { id: 13, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', price: 15.99, img: 'books-images/13.jpg' },
    { id: 14, title: 'Animal Farm', author: 'George Orwell', price: 8.99, img: 'books-images/14.jpg' },
    { id: 15, title: 'The Alchemist', author: 'Paulo Coelho', price: 9.99, img: 'books-images/15.jpg' },
    { id: 16, title: 'Huckleberry Finn', author: 'Mark Twain', price: 10.50, img: 'books-images/16.jpg' },
    { id: 17, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', price: 10.00, img: 'books-images/17.jpg' },
    { id: 18, title: 'Little Women', author: 'Louisa May Alcott', price: 9.75, img: 'books-images/18.jpg' },
    { id: 19, title: 'Frankenstein', author: 'Mary Shelley', price: 8.49, img: 'books-images/19.jpg' },
    { id: 20, title: 'Dracula', author: 'Bram Stoker', price: 10.89, img: 'books-images/20.jpg' },
  ]
  constructor() {}
 
}
