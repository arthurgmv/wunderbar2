import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICourse } from '../models/course';
import { BehaviorSubject, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiCourseService {
  private coursersSubject = new BehaviorSubject<ICourse[]>([]);
  coursersList = this.coursersSubject.asObservable();
  courseLength: number = 0;
  API_Url = 'https://crudcrud.com/api/101fdba304264a4ca7648ddbec2eeef3/courses';
  
  constructor(private http: HttpClient) {
    this.getAllCourses();
   }

  getAllCourses() {
    return this.http.get<ICourse[]>(this.API_Url).subscribe((course: ICourse[]) => {
      this.coursersSubject.next(course)
      if(course.length < 1){
        this.AddCoursesInitial();
      }
      this.courseLength = course.length;
    })
  }

  getCourseById(id: string) {
    return this.http.get<ICourse>(`${this.API_Url}/${id}`);
  }

  addCourse(course: ICourse) {
    if (!course.id)
      course.id = this.courseLength + 1;
    console.log(course);
    return this.http.post(this.API_Url, course).pipe(
      tap(() => this.getAllCourses())
    );
  }

  updateCourse(course: ICourse) {
    console.log(course);
    const { _id: courseId, ...courseNoId } = course;
    return this.http.put(`${this.API_Url}/${course._id}`, courseNoId).pipe(
      tap(() => this.getAllCourses())
    );
  }

  deleteCourse(course: any) {
    return this.http.delete(`${this.API_Url}/${course._id}`).pipe(
      tap(() => this.getAllCourses())
    );
  }

  AddCoursesInitial() {
    const courses = [
      {
        id: 1,
        name: 'JavaScript',
        level: 'Beginner',
        img: 'https://th.bing.com/th/id/OIP.DN7ToydkJZEdVaJVK_NhvwAAAA?rs=1&pid=ImgDetMain',
        price: 'USD 30'
      },
      {
        id: 2,
        name: 'TypeScript',
        level: 'Intermediate',
        img: 'https://th.bing.com/th/id/R.99a29ede35ec2ddf1f968bcdb17dbfdd?rik=XCSlxNe4MX5SOg&pid=ImgRaw&r=0',
        price: 'USD 40'
      },
      {
        id: 3,
        name: 'React',
        level: 'Intermediate',
        img: 'https://th.bing.com/th/id/R.41d22b08d745d995729400638deb352c?rik=qrhTfesVMR5slQ&pid=ImgRaw&r=0',
        price: 'USD 45'
      },
  
      {
        id: 4,
        name: 'Angular',
        level: 'Advanced',
        img: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/2%20(1)_Kp6XWwq.jpg',
        price: 'USD 50'
      },
      {
        id: 5,
        name: 'React Native',
        level: 'Advanced',
        img: 'https://logos-world.net/wp-content/uploads/2021/08/Android-Logo-2017-2019.png',
        price: 'USD 55'
      },
      {
        id: 6,
        name: 'Node Js',
        level: 'Advanced',
        img: 'https://th.bing.com/th/id/OIP.CTvVfHEeovAx-0V5-dqVRwHaHa?w=163&h=180&c=7&r=0&o=5&pid=1.7',
        price: 'USD 55'
      }
    ];

    courses.forEach(course => {
      this.addCourse(course).subscribe();
    });

  }
}