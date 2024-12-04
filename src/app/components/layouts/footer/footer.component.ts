import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogoComponentComponent } from "../../base-components/logo-component/logo-component.component";
import { BaseLinkComponentComponent } from "../../base-components/base-link-component/base-link-component.component";
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponentComponent, BaseLinkComponentComponent, DividerModule, AvatarModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

}
