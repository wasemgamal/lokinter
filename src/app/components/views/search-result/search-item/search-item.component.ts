import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { RatingStarsComponent } from "../../../shared/rating-stars/rating-stars.component";
import { FromToComponent } from "../from-to/from-to.component";
import { BaseLinkComponentComponent } from "../../../base-components/base-link-component/base-link-component.component";
@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [AvatarModule, RatingStarsComponent, FromToComponent, BaseLinkComponentComponent],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchItemComponent {
  item = input<any>()
}
