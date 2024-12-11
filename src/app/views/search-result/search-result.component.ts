import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ShadowBoxComponent } from "../../components/shared/shadow-box/shadow-box.component";
import { SearchFormComponent } from "../../components/views/home/search-form/search-form.component";
import { SearchItemComponent } from "../../components/views/search-result/search-item/search-item.component";
import { DialogComponentComponent } from "../../components/shared/dialog-component/dialog-component.component";
import { TripInfoComponent } from "../../components/views/search-result/trip-info/trip-info.component";
import { DeliverRequestInfoComponent } from "../../components/views/search-result/deliver-request-info/deliver-request-info.component";

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [ShadowBoxComponent, SearchFormComponent, SearchItemComponent, DialogComponentComponent, TripInfoComponent, DeliverRequestInfoComponent],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultComponent {
  tripDialog = signal<boolean>(false);
  deliverRequestDialog = signal<boolean>(false);
}
