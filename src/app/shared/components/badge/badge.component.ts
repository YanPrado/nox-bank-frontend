import { Component, Input } from '@angular/core';

export type BadgeVariant =
  | 'default'
  | 'profile'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info';

@Component({
  selector: 'app-badge',
  standalone: true,
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {

  @Input({ required: true })
  label!: string;

  @Input()
  variant: BadgeVariant = 'default';
}