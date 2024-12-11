import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShadowBoxComponent } from "../../components/shared/shadow-box/shadow-box.component";
import { AvatarModule } from 'primeng/avatar';
import { RatingStarsComponent } from "../../components/shared/rating-stars/rating-stars.component";

@Component({
  selector: 'app-user-reviews',
  standalone: true,
  imports: [ShadowBoxComponent, AvatarModule, RatingStarsComponent],
  templateUrl: './user-reviews.component.html',
  styleUrl: './user-reviews.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserReviewsComponent {

}
