import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/layouts/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../components/layouts/footer/footer.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
