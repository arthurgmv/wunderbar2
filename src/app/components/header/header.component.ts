// header.component.ts
import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { HeaderService } from './header.service';
import { ICourse } from '../../models/course';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  course: { course: ICourse; quantity: number }[] = [];

  constructor(private headerService: HeaderService) {}

  ngOnInit() {
    this.headerService.currentCourses.subscribe(updatedCourses => {
      this.course = updatedCourses;
    });
  }

  removeItem(courseId: number) {
    this.headerService.removeCourse(courseId);
  }

  incrementQuantity(courseId: number) {
    this.headerService.incrementQuantity(courseId);
  }
}
