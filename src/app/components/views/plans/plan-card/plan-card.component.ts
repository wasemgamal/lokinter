import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { IPlan } from '../../../../core/interfaces';
import { BaseButtonComponentComponent } from '../../../base-components/base-button-component/base-button-component.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-plan-card',
  standalone: true,
  imports: [BaseButtonComponentComponent, CurrencyPipe],
  templateUrl: './plan-card.component.html',
  styleUrl: './plan-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanCardComponent {
  plan = input.required<IPlan>()
}
