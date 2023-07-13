import {  Component } from '@angular/core';
import {  MatDialog } from '@angular/material/dialog';
import {  UserFormDialogComponent } from './pages/users/components/user-form-dialog/user-form-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  showFiller = false;
  constructor(
    private MatDialog: MatDialog
  ) {}

  onCreateUser(): void{
  this.MatDialog.open(UserFormDialogComponent);

  // dialogRef.afterClosed().subscribe({
  //   next: (v) => {
  //     if(v) {
  //     console.log('Alumno Recibido!: ', v );
  //     } else {
  //       console.log('Proceso Cancelado...');
  //     }
  //   }
  // })
  }
}
