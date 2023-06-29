import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto-Angular';
  sub_title = "Alumnos";
  alumnos : {id: number, nombre: string, apellido: string}[] = [
    {id: 1, nombre: "Nicolai" , apellido: "Belinsky"},
    {id: 2, nombre: "Edward", apellido: "Richtofen"},
    {id: 3, nombre: "Takeo", apellido: "Masaki"},
    {id: 4, nombre: "Tank", apellido: "Dempsey"},
    {id: 5, nombre: "Samantha", apellido: "Maxis"},
    {id: 6, nombre: "Luz", apellido: "Noceda"}
  ]
}
