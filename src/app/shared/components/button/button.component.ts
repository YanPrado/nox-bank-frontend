import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'ghost';

export type ButtonType =
  | 'button'
  | 'submit'
  | 'reset';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({ required: true })
  label!: string;

  @Input()
  variant: ButtonVariant = 'secondary';

  @Input()
  type: ButtonType = 'button';

  @Input()
  disabled = false;

  @Input()
  loading = false;

  @Input()
  fullWidth = false;

  @Output()
  clicked = new EventEmitter<MouseEvent>();

  onClick(event: MouseEvent): void {
    if (this.disabled || this.loading) {
      return;
    }

    this.clicked.emit(event);
  }
}