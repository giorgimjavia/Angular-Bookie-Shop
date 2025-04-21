import { Component } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CartComponent } from "./cart/cart.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchBarComponent, CartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
}
