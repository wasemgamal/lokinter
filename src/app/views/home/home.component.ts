import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseImageComponentComponent } from "../../components/base-components/base-image-component/base-image-component.component";
import { AvatarModule } from 'primeng/avatar';
import { BaseLinkComponentComponent } from "../../components/base-components/base-link-component/base-link-component.component";
import { SearchFormComponent } from "../../components/views/home/search-form/search-form.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BaseImageComponentComponent, AvatarModule, BaseLinkComponentComponent, SearchFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
