import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input()
  appName = 'Nox Bank';

  @Input()
  appDescription = 'Controle de acesso';

  @Input()
  userName = '';

  @Input()
  userProfile = '';

  @Output()
  menuToggle = new EventEmitter<void>();

  get userInitials(): string {
    if (!this.userName) {
      return '--';
    }

    return this.userName
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase();
  }

  onMenuToggle(): void {
    this.menuToggle.emit();
  }
}