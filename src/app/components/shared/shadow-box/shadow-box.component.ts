import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shadow-box',
  standalone: true,
  imports: [],
  templateUrl: './shadow-box.component.html',
  styleUrl: './shadow-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShadowBoxComponent {

}
