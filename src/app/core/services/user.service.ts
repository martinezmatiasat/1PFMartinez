import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable({
   providedIn: 'root'
}) export class UserService {

   data: User[] = [
      {
         id: 1,
         name: "Luis Perez",
         type: "Docente",
         present: false,
         //actions: ''
      },
      {
         id: 2,
         name: "Miguel Medina",
         type: "Estudiante",
         present: false,
         //actions: ''
      },
      {
         id: 3,
         name: "Hector Aguirre",
         type: "Estudiante",
         present: false,
         //actions: ''
      },
      {
         id: 4,
         name: "María Sosa",
         type: "Estudiante",
         present: false,
         //actions: ''
      },
      {
         id: 5,
         name: "Ramón Gomez",
         type: "Estudiante",
         present: false,
         //actions: ''
      },
      {
         id: 6,
         name: "Natalia Perez",
         type: "Estudiante",
         present: false,
         //actions: ''
      },
      {
         id: 7,
         name: "Luis Romero",
         type: "Docente",
         present: false,
         //actions: ''
      },
      {
         id: 8,
         name: "Carlos Acosta",
         type: "Estudiante",
         present: false,
         //actions: ''
      }
   ];
   

   darPresente(student: User): void {
      student.present = true;
      console.log('Hola');
      return;
   }

   constructor() {

   }
}