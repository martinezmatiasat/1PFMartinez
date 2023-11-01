import { Component } from '@angular/core';
import { User } from 'src/app/core/models/user.interface';
import { UserService } from 'src/app/core/services/user.service';

@Component({
   selector: 'app-users',
   templateUrl: './users.component.html',
   styleUrls: ['./users.component.scss']

}) export class UsersComponent {

   constructor(private userService: UserService) {
      /* serv.darPresente(student); */
   }

   dataSource: User[] = this.userService.data;
   displayedColumns: string[] = ['id', 'name', 'type', 'present', 'actions'];

   darPresente(student: User): void {
      student.present = true;
      console.log('Hola');
      return;
   }

   
}