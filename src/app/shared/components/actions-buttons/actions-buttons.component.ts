import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-buttons',
  standalone: true,
  templateUrl: './actions-buttons.component.html',
  styleUrl: './actions-buttons.component.scss'
})
export class ActionButtonsComponent {
  @Input() showView = true;
  @Input() showEdit = true;
  @Input() showDelete = true;

  @Output() view = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  onView(): void {
    this.view.emit();
  }

  onEdit(): void {
    this.edit.emit();
  }

  onDelete(): void {
    this.delete.emit();
  }
}