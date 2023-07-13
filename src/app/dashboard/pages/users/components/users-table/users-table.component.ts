import {  Component, Input } from '@angular/core';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent {
  displayedColumns: string[] = ['id', 'name', 'surname', 'email'];

  @Input()
  dataSource = [];
}
