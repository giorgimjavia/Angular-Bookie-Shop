import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { FooterComponent } from "./footer/footer.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [HeaderComponent, MainComponent, FooterComponent]
})
export class AppComponent {
    
}
