import {  Component } from '@angular/core';
import {  FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, FormArray, ValidationErrors } from '@angular/forms';
import { noNombreValidator } from 'src/app/shared/utils/form-validators';
import { nombreValidator } from 'src/app/shared/utils/form-validators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  nameControl = new FormControl(null, [
    Validators.required, 
    Validators.minLength(3),
    noNombreValidator(),
    nombreValidator(),
  ]);
  surnameControl = new FormControl();
  emailControl = new FormControl(null, [Validators.required]);
  passwordControl = new FormControl();

  usersForm = new FormGroup({
    name: this.nameControl,
    surname: this.surnameControl,
    email: this.emailControl,
    password: this.passwordControl
  });

  onSubmit(): void {
    alert(JSON.stringify(this.usersForm.value));
  }
}
