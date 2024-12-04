import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { BaseButtonComponentComponent } from "../../../base-components/base-button-component/base-button-component.component";
import { FloatLabelModule } from 'primeng/floatlabel';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ESearchType } from '../../../../core/enums';
import { ShadowBoxComponent } from "../../../shared/shadow-box/shadow-box.component";

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [BaseButtonComponentComponent, FloatLabelModule, DropdownModule, CalendarModule, ShadowBoxComponent],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFormComponent {
  type:WritableSignal<ESearchType> = signal(ESearchType.international);
  get ESearchType(){return ESearchType};
}
