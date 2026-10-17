import { Component } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { InputComponent } from '../../../../../shared/components/input/input.component';
import { BadgeComponent } from '../../../../../shared/components/badge/badge.component';
import { NoxTableComponent, NoxTableColumn } from '../../../../../shared/components/nox-table/nox-table.component';
import { HeaderComponent } from '../../../../../shared/components/header/header.component';
import { SidebarComponent, SidebarItem } from '../../../../../shared/components/sidebar/sidebar.component';
import { NoxDrawerComponent } from '../../../../../shared/components/nox-drawer/nox-drawer.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonComponent,
    InputComponent,
    BadgeComponent,
    NoxTableComponent,
    HeaderComponent,
    SidebarComponent,
    NoxDrawerComponent,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  searchControl = new FormControl('', {
    nonNullable: true,
  });

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

  showSearchValue(): void {
    console.log(this.searchControl.value);
  }



deleteUser(usuario: any): void {
  console.log('Excluir:', usuario);
}


columns: NoxTableColumn[] = [
  {
    key: 'name',
    label: 'Usuário'
  },
  {
    key: 'cpf',
    label: 'CPF'
  },
  {
    key: 'profile',
    label: 'Perfil',
    type: 'badge',
    badgeVariant: () => 'profile'
  },
  {
    key: 'active',
    label: 'Status',
    type: 'badge',

    formatter: (value) =>
      value ? 'Ativo' : 'Inativo',

    badgeVariant: (value) =>
      value ? 'success' : 'danger'
  }
];

users = [
  {
    id: 1,
    name: 'Lucas Almeida',
    email: 'lucas.almeida@noxbank.com',
    cpf: '123.456.789-09',
    profile: 'Administrador',
    active: true
  },

  {
    id: 2,
    name: 'Mariana Santos',
    email: 'mariana.santos@noxbank.com',
    cpf: '987.654.321-00',
    profile: 'Gerente',
    active: false
  }
];

userName = 'Yan Prado';
userProfile = 'Administrador';




//// side bar 

sidebarOpen = false;

activeSidebarItem = 'users';

sidebarItems: SidebarItem[] = [
  {
    id: 'users',
    label: 'Usuários'
  },
  {
    id: 'profiles',
    label: 'Perfis'
  },
  {
    id: 'permissions',
    label: 'Permissões'
  },
  {
    id: 'audit',
    label: 'Auditoria'
  }
];

toggleSidebar(): void {
  this.sidebarOpen = !this.sidebarOpen;
}

closeSidebar(): void {
  this.sidebarOpen = false;
}

onSidebarItemSelected(item: SidebarItem): void {
  this.activeSidebarItem = item.id;

  console.log('Menu selecionado:', item);

  this.closeSidebar();
}

/////NOX-DRAWER

drawerOpen = false;

selectedUser: any = null;

viewUser(user: any): void {
  this.selectedUser = user;
  this.drawerOpen = true;
}

editUser(user: any): void {
  this.selectedUser = user;
  this.drawerOpen = true;
}

closeDrawer(): void {
  this.drawerOpen = false;
  this.selectedUser = null;
}
}