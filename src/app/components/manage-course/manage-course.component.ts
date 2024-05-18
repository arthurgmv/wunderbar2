import { Component } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ICourse } from '../../models/course';
import { ApiCourseService } from '../../api-service/api-course.service';

@Component({
  selector: 'app-manage-course',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './manage-course.component.html',
  styleUrl: './manage-course.component.css'
})
export class ManageCourseComponent {
  courseList: ICourse[] = [];
  courseForm: FormGroup;

  constructor(private courseService: ApiCourseService) {
    this.courseForm = new FormGroup({
      name: new FormControl(),
      level: new FormControl(),
      img: new FormControl(),
      price: new FormControl(),
 
    });
  }
 
  submitForm() {
    const newCourse: ICourse = this.courseForm.value;
    newCourse.id = this.courseList.length + 1;
    this.courseList.push(newCourse);
    console.log(this.courseList);
    const result = this.courseService.addCourse(newCourse).subscribe();
  }
}
