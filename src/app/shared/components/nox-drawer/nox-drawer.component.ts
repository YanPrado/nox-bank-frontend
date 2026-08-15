import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-nox-drawer',
  standalone: true,
  templateUrl: './nox-drawer.component.html',
  styleUrl: './nox-drawer.component.scss'
})
export class NoxDrawerComponent {

  @Input()
  open = false;

  @Input()
  kicker = '';

  @Input()
  title = '';

  @Input()
  subtitle = '';

  @Output()
  close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}