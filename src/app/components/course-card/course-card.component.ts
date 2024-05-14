import {Component, EventEmitter, Output} from '@angular/core';
import {ICourse} from "../../models/course";
import {NgForOf} from "@angular/common";
import {HeaderService} from "../header/header.service";

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  coursesList:ICourse[] = [
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
    }
  ]

  constructor(private headerService: HeaderService) {}
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
}
