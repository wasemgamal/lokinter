import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ShadowBoxComponent } from "../../components/shared/shadow-box/shadow-box.component";
import { BaseButtonComponentComponent } from "../../components/base-components/base-button-component/base-button-component.component";
import { ESearchType } from '../../core/enums';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
@Component({
  selector: 'app-post-trip',
  standalone: true,
  imports: [ShadowBoxComponent, BaseButtonComponentComponent, FloatLabelModule, DropdownModule, CalendarModule],
  templateUrl: './post-trip.component.html',
  styleUrl: './post-trip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostTripComponent {
  type= signal(ESearchType.international);
  get ESearchType(){return ESearchType};
}
