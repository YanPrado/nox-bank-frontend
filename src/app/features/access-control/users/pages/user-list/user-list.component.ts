import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  isSaving = false;

  testButton(): void {
    console.log('Botão clicado');
  }

  simulateSave(): void {
    this.isSaving = true;

    setTimeout(() => {
      this.isSaving = false;
    }, 2000);
  }
}