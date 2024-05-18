import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ICourse} from "../../models/course";
import {NgForOf} from "@angular/common";
import {HeaderService} from "../header/header.service";
import { ApiService } from '../../api-service/api.service';
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

  constructor(private headerService: HeaderService, private apiService: ApiService) {}
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
    const $booksList = this.apiService.coursersList;
    $booksList.subscribe((booksList) => {
      this.coursesList = booksList;
      console.log(this.coursesList)
    })
  }
  
}
