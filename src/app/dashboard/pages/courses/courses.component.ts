import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCourseComponent } from '../create-course/create-course.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  constructor(private dialog: MatDialog) {
  }

  openCreateCourse(): void {
    this.dialog.open(CreateCourseComponent).afterClosed().subscribe({
      next: (v) => {
        console.log(v);
      }
    });
  }

  getFormInfo(): void {
    
  }
}
