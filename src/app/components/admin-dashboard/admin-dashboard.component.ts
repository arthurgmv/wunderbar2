import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../models/course';
import { ApiCourseService } from '../../api-service/api-course.service';


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit{

  coursesList: ICourse[] = [];

  constructor(private ApiCourseService: ApiCourseService) { }

  ngOnInit(): void {
    this.ApiCourseService.coursersList.subscribe((courses: ICourse[]) => {
      this.coursesList = courses;
      console.log(this.coursesList);
    });
  }

  DeleteCourse(course: ICourse) {
      console.log(course);
      this.ApiCourseService.deleteCourse(course).subscribe();

    }
    EditCourse(course: ICourse) {
      console.log(course);
    }
}
