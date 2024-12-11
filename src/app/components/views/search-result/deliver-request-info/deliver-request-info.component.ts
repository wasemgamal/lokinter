import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseLinkComponentComponent } from "../../../base-components/base-link-component/base-link-component.component";
import { FromToComponent } from "../from-to/from-to.component";

@Component({
  selector: 'app-deliver-request-info',
  standalone: true,
  imports: [BaseLinkComponentComponent, FromToComponent],
  templateUrl: './deliver-request-info.component.html',
  styleUrl: './deliver-request-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeliverRequestInfoComponent {

}
