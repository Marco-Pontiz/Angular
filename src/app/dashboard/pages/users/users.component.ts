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

}
