import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { DashboardComponent }     from './dashboard.component';
import { MatSidenavModule }       from '@angular/material/sidenav';
import { MatListModule }          from '@angular/material/list';
import { MenuComponent }          from './menu/menu.component';
import { StudentDetailsComponent }from './student-details/student-details.component';
import { HomeComponent }          from './home/home.component';
import { CoursesComponent }       from './courses/courses.component';
import { MatToolbarModule }       from '@angular/material/toolbar';
import { CreateCourseComponent }  from './create-course/create-course.component';
import { SharedModule }           from '../shared/shared.module';
import { MatTableModule }         from '@angular/material/table';
import { UsersComponent }         from './users/users.component';
import { UserDetailsComponent }   from './user-details/user-details.component';
import { AppRoutingModule }       from '../app-routing.module';

@NgModule({
  declarations: [ 
    DashboardComponent, 
    MenuComponent, 
    StudentDetailsComponent, 
    HomeComponent, 
    CoursesComponent, 
    CreateCourseComponent, 
    UsersComponent, 
    UserDetailsComponent 
  ],
  imports: [ 
    CommonModule,
    SharedModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    AppRoutingModule
  ],
  exports: [ 
    DashboardComponent 
  ]
}) export class DashboardModule {

}