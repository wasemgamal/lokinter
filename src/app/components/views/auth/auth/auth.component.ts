import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BaseImageComponentComponent } from '../../../base-components/base-image-component/base-image-component.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [BaseImageComponentComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {
  img = input.required<string>()
}
