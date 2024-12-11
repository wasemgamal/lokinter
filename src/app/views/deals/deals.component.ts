import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShadowBoxComponent } from "../../components/shared/shadow-box/shadow-box.component";
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule } from 'primeng/paginator';
import { MenuModule } from 'primeng/menu';
@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [ShadowBoxComponent, TableModule, DropdownModule, PaginatorModule, MenuModule],
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DealsComponent {
  filters = [
    {
      label: 'Options',
      items: [
        {
          label: 'Refresh',
          icon: 'pi pi-refresh'
        },
        {
          label: 'Export',
          icon: 'pi pi-upload'
        }
      ]
    }
  ];
  deals = [
    {
      from: 'Egypt',
      to: 'Qatar',
      date: '12-10-2024',
      status: 'Ongoing',
      type: 'International',
    },
    {
      from: 'Egypt',
      to: 'Qatar',
      date: '12-10-2024',
      status: 'Ongoing',
      type: 'International',
    },
    {
      from: 'Egypt',
      to: 'Qatar',
      date: '12-10-2024',
      status: 'Ongoing',
      type: 'International',
    },
    {
      from: 'Egypt',
      to: 'Qatar',
      date: '12-10-2024',
      status: 'Ongoing',
      type: 'International',
    },
    {
      from: 'Egypt',
      to: 'Qatar',
      date: '12-10-2024',
      status: 'Ongoing',
      type: 'International',
    },
    {
      from: 'Egypt',
      to: 'Qatar',
      date: '12-10-2024',
      status: 'Ongoing',
      type: 'International',
    },
    {
      from: 'Egypt',
      to: 'Qatar',
      date: '12-10-2024',
      status: 'Ongoing',
      type: 'International',
    },
  ]
  tabs: any[] = [
    {
      class: 'btn-success',
      label: 'Completed deals',
      id: ''
    },
    {
      class: 'btn-danger',
      label: 'Cancelled Deals',
      id: ''
    },
    {
      class: 'btn-secondary',
      label: 'Ongoing Deals',
      id: ''
    },
    {
      class: 'btn-primary',
      label: 'Posted Trip',
      id: ''
    },
    {
      class: 'btn-primary',
      label: 'Posted Delivery request',
      id: ''
    },
  ]
}
