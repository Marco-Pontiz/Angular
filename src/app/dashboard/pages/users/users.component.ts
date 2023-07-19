import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Usuario } from './models';
import { UserFormDialogComponent, UserFormData } from './components/user-form-dialog/user-form-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  public users: Usuario[] = [
    {
      id: 1,
      name: 'Marcos',
      surname: 'Rodriguez',
      email: 'mark@mail.com',
      password: '123456',
    }
  ];

  constructor(private dialog: MatDialog) {}

  onCreateUser(): void {
    const dialogRef = this.dialog.open(UserFormDialogComponent, {
      width: '400px',
      data: {
        name: '',
        surname: '',
        email: '',
        password: ''
      }
    });

    dialogRef.afterClosed().subscribe((formData: UserFormData | undefined) => {
      if (formData) {
        const newUser: Usuario = {
          id: this.users.length + 1,
          name: formData.name,
          surname: formData.surname,
          email: formData.email,
          password: formData.password,
        };
        this.users.push(newUser);
      }
    });
  }
}
