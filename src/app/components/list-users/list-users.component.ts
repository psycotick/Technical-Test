import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit {
  listUsers: User[] = [
    { id: 1, document: '1034657373', firstName: 'Santiago', lastName: 'Ruiz', phone: '3118011657', email: 'santiago.develops@gmail.com', foto: 'image.png', idTipoDocumento: 1, idSexo: 1},
    { id: 2, document: '52217181', firstName: 'Mireya', lastName: 'Patarroyo', phone: '3104223702', email: 'miyisco@gmail.com', foto: 'image.png', idTipoDocumento: 1, idSexo: 2}
  ]

  constructor() {}
  ngOnInit(): void {
}
}
