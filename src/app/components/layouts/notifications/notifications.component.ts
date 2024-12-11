import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { BadgeModule } from 'primeng/badge';
import { MenuItem } from 'primeng/api';
import { BaseButtonComponentComponent } from "../../base-components/base-button-component/base-button-component.component";

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [MenuModule, ScrollPanelModule, BadgeModule, BaseButtonComponentComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationsComponent {
  notifications: MenuItem[] = [
    {
      separator:true
    },
    {
      items: [
        {
          label: 'Refresh',
        },
        {
          label: 'Export',
        },
        {
          label: 'Refresh',
        },
        {
          label: 'Export',
        },
        {
          label: 'Refresh',
        },
        {
          label: 'Export',
        },
        {
          label: 'Refresh',
        },
        {
          label: 'Export',
        },
        {
          label: 'Refresh',
        },
        {
          label: 'Export',
        },
      ]
    }
  ]
}
