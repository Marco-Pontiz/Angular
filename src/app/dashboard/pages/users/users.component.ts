import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Usuario } from './models';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';

const ELEMENT_DATA: Usuario[] = [{
  id: 1,
  name: 'Marcos',
  surname: 'Rodriguez',
  email: 'mark@mail.com',
  password: '123456',
}];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  public users: Usuario[] = ELEMENT_DATA;

  constructor(
    private dialog: MatDialog
  ) {}

  onCreateUser(): void {
    this.dialog
      .open(UserFormDialogComponent)
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (v) {
            this.users.push({
              id: this.users.length + 1,
              name: v.name,
              surname: v.surname,
              email: v.email,
              password: v.password,
            });

            console.log('Alumno Recibido:', v);
          } else {
            console.log('Proceso Cancelado...');
          }
        }
      });
  }
}