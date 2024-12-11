import { RatingModule } from 'primeng/rating';
import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rating-stars',
  standalone: true,
  imports: [RatingModule, FormsModule],
  templateUrl: './rating-stars.component.html',
  styleUrl: './rating-stars.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingStarsComponent {
  @Input() value:number = 2;
}
