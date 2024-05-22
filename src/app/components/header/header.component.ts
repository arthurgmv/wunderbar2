// header.component.ts
import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { HeaderService } from './header.service';
import { ICourse } from '../../models/course';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../guards/auth.service';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgForOf, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  course: { course: ICourse; quantity: number }[] = [];
  user?: IUser | null;
  
  constructor(private headerService: HeaderService, private authService: AuthService) {}
  
  ngOnInit() {
    this.headerService.currentCourses.subscribe(updatedCourses => {
      this.course = updatedCourses;
    });
    this.authService.loggedUser$.subscribe(user => {
      this.user = user;
      console.log(this.user);
    });

    this.user = this.authService.getLoggedUser();
  }
  
  removeItem(courseId: number) {
    this.headerService.removeCourse(courseId);
  }
  
  incrementQuantity(courseId: number) {
    this.headerService.incrementQuantity(courseId);
  }

  LogOut() {
    this.headerService.logOut();
  }
  
}
