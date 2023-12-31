import { Component, Input } from '@angular/core';
import { Usuario } from '../../models/index';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent {
  @Input()
  dataSource: Usuario[] = [];

  displayedColumns: string[] = ['id', 'name', 'surname', 'email'];
}
