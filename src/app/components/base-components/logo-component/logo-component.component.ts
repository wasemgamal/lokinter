import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BaseLinkComponentComponent } from '../base-link-component/base-link-component.component';

@Component({
  selector: 'app-logo-component',
  standalone: true,
  imports: [BaseLinkComponentComponent],
  templateUrl: './logo-component.component.html',
  styleUrl: './logo-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponentComponent {
  classes = input<string>();
}
