import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ICourse} from "../../models/course";
import {NgForOf} from "@angular/common";
import {HeaderService} from "../header/header.service";
import { ApiCourseService } from '../../api-service/api-course.service';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit{
  coursesList:ICourse[] = []

  constructor(private headerService: HeaderService, private apiCourseService: ApiCourseService) {}
  addToCart(course:ICourse) {
    this.headerService.addCourse(course);
  }

/*
  @Output() addCourseToCart: EventEmitter<ICourse> = new EventEmitter();
  addToShoppingCart(course: ICourse){
    this.addCourseToCart.emit(course);
    console.log("Clicou");
    console.log(course)

  } */

  ngOnInit() {
    const $coursersList = this.apiCourseService.coursersList;
    $coursersList.subscribe((coursersList) => {
      this.coursesList = coursersList;
      console.log(this.coursesList)
    })
  }
  
}
