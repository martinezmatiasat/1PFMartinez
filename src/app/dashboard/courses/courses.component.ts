import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCourseComponent } from '../create-course/create-course.component';

interface Course {
  id: number,
  name: string,
  duration: string,
  actions: string
}

const ELEMENT_DATA: Course[] = [
  { id: 1, name: 'React',   duration: '2 meses', actions: '' },
  { id: 2, name: 'Angular', duration: '3 meses', actions: '' },
  { id: 3, name: 'Vue',     duration: '2 meses', actions: '' },
  { id: 4, name: 'Ionic',   duration: '3 meses', actions: '' },
  { id: 5, name: 'Node',    duration: '6 meses', actions: '' }
];

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
  
}) export class CoursesComponent {

  dataSource: Course[] = ELEMENT_DATA;
  displayedColumns: string[] = ['id', 'name', 'duration', 'actions'];

  constructor(private dialog: MatDialog) {
  }

  openCreateCourse(): void {
    this.dialog.open(CreateCourseComponent);

    /* this.dialog.open(CreateCourseComponent).afterClosed().subscribe({
      next: (v) => {
        console.log(v);
      }
    }); */
  }

}