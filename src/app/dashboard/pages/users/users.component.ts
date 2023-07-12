import {  Component } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  nameControl = new FormControl(null, [
    Validators.required, 
    Validators.minLength(3)
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
