import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuComponent } from './pages/menu/menu.component';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CreateCourseComponent } from './pages/create-course/create-course.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ 
    DashboardComponent, 
    MenuComponent, 
    StudentDetailsComponent, 
    HomeComponent, 
    CoursesComponent, 
    CreateCourseComponent 
  ],
  imports: [ 
    CommonModule,
    SharedModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  exports: [ DashboardComponent ]
})
export class DashboardModule {

}