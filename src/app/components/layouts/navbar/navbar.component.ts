import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogoComponentComponent } from "../../base-components/logo-component/logo-component.component";
import { BaseLinkComponentComponent } from "../../base-components/base-link-component/base-link-component.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponentComponent, BaseLinkComponentComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

}
