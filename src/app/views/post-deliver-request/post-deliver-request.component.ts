import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ShadowBoxComponent } from "../../components/shared/shadow-box/shadow-box.component";
import { BaseButtonComponentComponent } from "../../components/base-components/base-button-component/base-button-component.component";
import { ESearchType } from '../../core/enums';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-post-deliver-request',
  standalone: true,
  imports: [ShadowBoxComponent, BaseButtonComponentComponent, FloatLabelModule, DropdownModule, CalendarModule, FileUploadModule],
  templateUrl: './post-deliver-request.component.html',
  styleUrl: './post-deliver-request.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostDeliverRequestComponent {
  type= signal(ESearchType.international);
  get ESearchType(){return ESearchType};
}
