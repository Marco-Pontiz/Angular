import {  NgModule } from '@angular/core';
import {  CommonModule } from '@angular/common';
import {  MatCardModule } from '@angular/material/card';
import {  MatButtonModule } from '@angular/material/button';
import {  MatIconModule } from '@angular/material/icon';
import {  MatDialogModule } from '@angular/material/dialog';
import {  ReactiveFormsModule } from '@angular/forms';
import {  MatInputModule } from '@angular/material/input';
import {  MatTableModule } from '@angular/material/table';
import {  MatFormFieldModule  } from '@angular/material/form-field';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTableModule
  ],
})
export class SharedModule { }
