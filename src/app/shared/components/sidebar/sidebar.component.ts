import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

export interface SidebarItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  @Input()
  open = false;

  @Input()
  activeItem = '';

  @Input()
  items: SidebarItem[] = [];

  @Output()
  close = new EventEmitter<void>();

  @Output()
  itemSelected = new EventEmitter<SidebarItem>();

  onClose(): void {
    this.close.emit();
  }

  onSelect(item: SidebarItem): void {
    this.itemSelected.emit(item);
  }
}