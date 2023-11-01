import { Component } from '@angular/core';
import { User } from 'src/app/core/models/user.interface';

const ELEMENT_DATA: User[] = [
   {
      id: 1,
      name: "Luis Perez",
      type: "Docente",
      present: false
   },
   {
      id: 2,
      name: "Miguel Medina",
      type: "Estudiante",
      present: false
   },
   {
      id: 3,
      name: "Hector Aguirre",
      type: "Estudiante",
      present: false
   },
   {
      id: 4,
      name: "María Sosa",
      type: "Estudiante",
      present: false
   },
   {
      id: 5,
      name: "Ramón Gomez",
      type: "Estudiante",
      present: false
   },
   {
      id: 6,
      name: "Natalia Perez",
      type: "Estudiante",
      present: false
   },
   {
      id: 7,
      name: "Luis Romero",
      type: "Docente",
      present: false
   },
   {
      id: 8,
      name: "Carlos Acosta",
      type: "Estudiante",
      present: false
   }
];

@Component({
   selector: 'app-users',
   templateUrl: './users.component.html',
   styleUrls: ['./users.component.scss']

}) export class UsersComponent {

   dataSource: User[] = ELEMENT_DATA;
   displayedColumns: string[] = ['id', 'name', 'type', 'present'];

   darPresente(student: User): void {
      student.present = true;
      return;
   }
}