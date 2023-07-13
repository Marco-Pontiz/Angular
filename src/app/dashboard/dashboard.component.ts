import {  Component } from '@angular/core';
import {  MatDialog } from '@angular/material/dialog';
import {  UserFormDialogComponent } from './pages/users/components/user-form-dialog/user-form-dialog.component';
import {  Usuario } from './pages/users/models/index';

const ELEMENT_DATA: Usuario[] = [
  {
    id:1,
    name: 'Marco',
    surname:'Pontiz',
    email: 'marcopontiz@gmail.com',
    password: '123456789'
  }
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  public users: Usuario[] = ELEMENT_DATA;

  showFiller = false;
  constructor(
    private MatDialog: MatDialog
  ) {}

  onCreateUser(): void{
  const dialogRef = this.MatDialog.open(UserFormDialogComponent);

  dialogRef.afterClosed().subscribe({
    next: (v) => {
      if(v) {
      console.log('Alumno Recibido!: ', v );
      } else {
        console.log('Proceso Cancelado...');
      }
    }
  })
  }
}
