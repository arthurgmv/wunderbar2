import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../models/course';
import { ApiCourseService } from '../../api-service/api-course.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterModule],
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
      const confirm = window.confirm('Confirma a exclusão do curso?');
      if(confirm)
        this.ApiCourseService.deleteCourse(course).subscribe();
    }
    EditCourse(course: ICourse) {
      console.log(course);
    }
}
