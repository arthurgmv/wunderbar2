import { Injectable } from '@angular/core';
import { ICourse } from '../../models/course';
import { ApiCourseService } from '../../api-service/api-course.service';

@Injectable({
  providedIn: 'root'
})
export class ManageCourseService {

  course?: ICourse;
  constructor(private courseService: ApiCourseService) { }

  GetById(id: string){
    return this.courseService.getCourseById(id)
   
  }

  AddCourse(course: ICourse){
    return this.courseService.addCourse(course);
  }

  UpdateCourse(course: ICourse){
    return this.courseService.updateCourse(course);
  }
}
