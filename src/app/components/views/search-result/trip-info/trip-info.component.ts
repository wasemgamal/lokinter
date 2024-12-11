import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FromToComponent } from "../from-to/from-to.component";
import { BaseLinkComponentComponent } from "../../../base-components/base-link-component/base-link-component.component";
import { BaseButtonComponentComponent } from "../../../base-components/base-button-component/base-button-component.component";

@Component({
  selector: 'app-trip-info',
  standalone: true,
  imports: [FromToComponent, BaseLinkComponentComponent],
  templateUrl: './trip-info.component.html',
  styleUrl: './trip-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripInfoComponent {

}
