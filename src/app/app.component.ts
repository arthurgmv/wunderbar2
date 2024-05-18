import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {CourseCardComponent} from "./components/course-card/course-card.component";
import {ICourse} from "./models/course";
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ManageCourseComponent } from './components/manage-course/manage-course.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CourseCardComponent, AdminDashboardComponent, ManageCourseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Wunderbar2';

}
