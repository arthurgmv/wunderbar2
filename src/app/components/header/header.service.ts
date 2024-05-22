// header.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICourse } from '../../models/course';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private courses = new BehaviorSubject<{ course: ICourse, quantity: number }[]>([]);

  currentCourses = this.courses.asObservable();

  constructor() {
  }

  addCourse(newCourse: ICourse) {
    const currentCourses = this.courses.value;
    let found = false;

    const updatedCourses = currentCourses.map(item => {
      if (item.course.id === newCourse.id) {
        found = true;
        return {...item, quantity: item.quantity + 1};
      }
      return item;
    });

    if (!found) {
      updatedCourses.push({course: newCourse, quantity: 1});
    }

    this.courses.next(updatedCourses);
  }

  removeCourse(courseId: number): void {
    const currentCourses = this.courses.value;
    // Defina explicitamente o tipo do acumulador como o mesmo tipo do BehaviorSubject
    const updatedCourses = currentCourses.reduce<{ course: ICourse, quantity: number }[]>((acc, item) => {
      if (item.course.id === courseId) {
        if (item.quantity > 1) {
          acc.push({...item, quantity: item.quantity - 1});
        }
      } else {
        acc.push(item);
      }
      return acc;
    }, []);

    this.courses.next(updatedCourses);
  }

  incrementQuantity(courseId: number) {
    const updatedCourses = this.courses.value.map(item => {
      if (item.course.id === courseId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    this.courses.next(updatedCourses);
  }

}
