import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthComponent } from '../../../components/views/auth/auth/auth.component';
import { BaseLinkComponentComponent } from '../../../components/base-components/base-link-component/base-link-component.component';
import { BaseButtonComponentComponent } from '../../../components/base-components/base-button-component/base-button-component.component';
import { ERoutes } from '../../../core/enums/routes.enum';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [AuthComponent, BaseLinkComponentComponent, BaseButtonComponentComponent, DropdownModule, InputNumberModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
  accountsTypes: {title:string, type: string}[] = [
    {
      title: 'Traveler',
      type: 'T'
    },
    {
      title: 'Sender',
      type: 'S'
    },
  ]
  get ERoutes(){
    return ERoutes
  }

}
