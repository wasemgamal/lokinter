import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogoComponentComponent } from "../../base-components/logo-component/logo-component.component";
import { BaseLinkComponentComponent } from "../../base-components/base-link-component/base-link-component.component";
import { ERoutes } from '../../../core/enums';
import { MenuModule } from 'primeng/menu';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { NotificationsComponent } from "../notifications/notifications.component";
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponentComponent, BaseLinkComponentComponent, NotificationsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  get ERoutes() { return ERoutes }
}
