import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthComponent } from '../../../components/views/auth/auth/auth.component';
import { BaseLinkComponentComponent } from "../../../components/base-components/base-link-component/base-link-component.component";
import { ERoutes } from '../../../core/enums/routes.enum';
import { BaseButtonComponentComponent } from '../../../components/base-components/base-button-component/base-button-component.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthComponent, BaseLinkComponentComponent, BaseButtonComponentComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  get ERoutes(){
    return ERoutes
  }
}
