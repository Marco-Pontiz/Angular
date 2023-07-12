import {  Component } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  nameControl = new FormControl();
  surnameControl = new FormControl();
  emailControl = new FormControl();
  passwordControl = new FormControl();

  usersForm = new FormGroup({
    name: this.nameControl,
    surname: this.surnameControl,
    email: this.emailControl,
    password: this.passwordControl
  });
}
