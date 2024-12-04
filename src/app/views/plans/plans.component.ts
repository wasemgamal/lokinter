import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IPlan } from '../../core/interfaces';
import { PlanCardComponent } from '../../components/views/plans/plan-card/plan-card.component';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [PlanCardComponent],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlansComponent {
  plans : IPlan[] = [
    {
      title: 'Hoppy',
      cost: 10,
      icon: 'home',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem',
      features: ['It is a long established', 'It is a long established'],
      iconColor: 'var(--bs-black)',
      buttonClass: 'btn-secondary'
    },
    {
      title: 'Professional',
      cost: 100,
      icon: 'trophy',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem',
      features: ['It is a long established', 'It is a long established'],
      buttonClass: 'btn-primary',
      iconColor: 'var(--pink-500)'
    },
    {
      title: 'Business',
      cost: 300,
      icon: 'building',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem',
      features: ['It is a long established', 'It is a long established'],
      buttonClass: 'btn-secondary',
      iconColor: 'var(--bs-black)'
    },
  ]
}
