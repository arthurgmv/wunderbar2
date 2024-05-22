import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ICourse } from '../../models/course';
import { ManageCourseService } from './manage-course.service';

@Component({
  selector: 'app-manage-course',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './manage-course.component.html',
  styleUrl: './manage-course.component.css'
})

export class ManageCourseComponent implements OnInit{
  course?: ICourse;
  courseList: ICourse[] = [];
  courseForm: FormGroup;
  courseId: string;

  constructor(private courseService: ManageCourseService, private route: ActivatedRoute, private router: Router) {
    this.courseId = this.route.snapshot.params["id"];
    this.courseForm = new FormGroup({
    name: new FormControl(),
    level: new FormControl(),
    img: new FormControl(),
    price: new FormControl(),
    });   
  }

  ngOnInit(): void {
    const $course = this.courseService.GetById(this.courseId);
    $course.subscribe((course: ICourse) => {
      this.course = course;
      console.log(this.course);
      this.courseForm.patchValue(this.course);
    });
  }

  submitForm() {
    const newCourse: ICourse = this.courseForm.value;
    newCourse.id = this.courseList.length + 1;
    this.courseList.push(newCourse);
    console.log(this.courseList);
    if(!this.course?._id){
      const result = this.courseService.AddCourse(newCourse).subscribe();
      alert('Curso adicionado com sucesso!');
      this.router.navigate(['/dashboard']);
    } else {
      newCourse._id = this.course._id;
      newCourse.price = "USD " + newCourse.price;
      const result = this.courseService.UpdateCourse(newCourse).subscribe();
      alert('Curso atualizado com sucesso!');
      this.router.navigate(['/dashboard']);
    }
  }
}