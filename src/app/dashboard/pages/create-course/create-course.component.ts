import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface TimeUnit {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent {
  timeUnits: TimeUnit[] = [
    { value: 'dia', viewValue: 'Días' },
    { value: 'semana', viewValue: 'Semanas' },
    { value: 'mes', viewValue: 'Meses' },
  ];

  createCourseForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createCourseForm = this.formBuilder.group({
      name: ['', Validators.required],
      duration: ['', Validators.required],
      timeUnit: ['', Validators.required]
    });
  }

  public get nameControl() {
    return this.createCourseForm.get('name');
  }

  public get durationControl() {
    return this.createCourseForm.get('duration');
  }

  public get timeUnitControl() {
    return this.createCourseForm.get('timeUnit');
  }
}
