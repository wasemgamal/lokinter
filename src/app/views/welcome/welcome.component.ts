import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseButtonComponentComponent } from "../../components/base-components/base-button-component/base-button-component.component";
import { LogoComponentComponent } from "../../components/base-components/logo-component/logo-component.component";
import { ERoutes } from '../../core/enums/routes.enum';
import { BaseLinkComponentComponent } from "../../components/base-components/base-link-component/base-link-component.component";
import { BaseImageComponentComponent } from "../../components/base-components/base-image-component/base-image-component.component";
import { AvatarModule } from "primeng/avatar";
import { DividerModule } from "primeng/divider";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [BaseButtonComponentComponent, LogoComponentComponent, BaseLinkComponentComponent, BaseImageComponentComponent, AvatarModule, DividerModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent {
  year : number = new Date().getFullYear()
  links: {title:string, link: string}[]=[
    {
      title:'home',
      link: '/' + ERoutes.welcome
    },
    {
      title:'about us',
      link: '/' + ERoutes.aboutUs
    },
    {
      title:'services',
      link: '/' + ERoutes.services
    },
    {
      title:'contact us',
      link: '/' + ERoutes.contact
    },
  ]

  aboutCounts :{title:string, count: number}[] = [
    {
      title: 'traveler',
      count: 2000
    },
    {
      title: 'sender',
      count: 2000
    },
    {
      title: 'deal',
      count: 2000
    },
  ]
}
