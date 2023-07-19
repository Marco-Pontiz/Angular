import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { noNombreValidator, nombreValidator } from 'src/app/shared/utils/form-validators';

@Component({
  selector: 'app-user-form-dialog',
  templateUrl: './user-form-dialog.component.html',
  styleUrls: ['./user-form-dialog.component.css']
})
export class UserFormDialogComponent {
  nameControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(3),
    noNombreValidator(),
    nombreValidator(),
  ]);
  surnameControl = new FormControl(null, [Validators.required]);
  emailControl = new FormControl(null, [Validators.required]);
  passwordControl = new FormControl(null, [Validators.required]);

  usersForm = new FormGroup({
    name: this.nameControl,
    surname: this.surnameControl,
    email: this.emailControl,
    password: this.passwordControl
  });

  constructor(private dialogRef: MatDialogRef<UserFormDialogComponent>) { }

  onSubmit(): void {
    if (this.usersForm.invalid) {
      this.usersForm.markAllAsTouched();
    } else {
      const formValue = this.usersForm.value;
      this.dialogRef.close(formValue);
      console.log('Alumno Recibido:', formValue);
    }
  }

  onCancel(): void {
    console.log('Proceso Cancelado...');
    this.dialogRef.close();
  }
}