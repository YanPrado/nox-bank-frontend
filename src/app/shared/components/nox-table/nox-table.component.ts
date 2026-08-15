import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  BadgeComponent,
  BadgeVariant
} from '../badge/badge.component';
import { ActionButtonsComponent } from '../actions-buttons/actions-buttons.component';

export interface NoxTableColumn {
  key: string;
  label: string;

  type?: 'text' | 'badge';

  align?: 'left' | 'center' | 'right';

  formatter?: (value: unknown, row: Record<string, any>) => string;

  badgeVariant?: (
    value: unknown,
    row: Record<string, any>
  ) => BadgeVariant;
}

@Component({
  selector: 'app-nox-table',
  standalone: true,
  imports: [
    BadgeComponent,
    ActionButtonsComponent
  ],
  templateUrl: './nox-table.component.html',
  styleUrl: './nox-table.component.scss'
})
export class NoxTableComponent {

  @Input({ required: true })
  columns: NoxTableColumn[] = [];

  @Input({ required: true })
  data: Record<string, any>[] = [];

  @Input()
  showActions = true;

  @Input()
  showView = true;

  @Input()
  showEdit = true;

  @Input()
  showDelete = true;

  @Input()
  emptyMessage = 'Nenhum registro encontrado.';

  @Output()
  rowClick = new EventEmitter<Record<string, any>>();

  @Output()
  view = new EventEmitter<Record<string, any>>();

  @Output()
  edit = new EventEmitter<Record<string, any>>();

  @Output()
  delete = new EventEmitter<Record<string, any>>();

  getValue(
    row: Record<string, any>,
    column: NoxTableColumn
  ): unknown {
    return row[column.key];
  }

  getDisplayValue(
    row: Record<string, any>,
    column: NoxTableColumn
  ): string {

    const value = this.getValue(row, column);

    if (column.formatter) {
      return column.formatter(value, row);
    }

    if (value === null || value === undefined || value === '') {
      return '—';
    }

    return String(value);
  }

  getBadgeVariant(
    row: Record<string, any>,
    column: NoxTableColumn
  ): BadgeVariant {

    const value = this.getValue(row, column);

    if (column.badgeVariant) {
      return column.badgeVariant(value, row);
    }

    return 'default';
  }

  onRowClick(row: Record<string, any>): void {
    this.rowClick.emit(row);
  }

  onView(row: Record<string, any>): void {
    this.view.emit(row);
  }

  onEdit(row: Record<string, any>): void {
    this.edit.emit(row);
  }

  onDelete(row: Record<string, any>): void {
    this.delete.emit(row);
}
}