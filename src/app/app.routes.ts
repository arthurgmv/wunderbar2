import { Routes } from '@angular/router';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ManageCourseComponent } from './components/manage-course/manage-course.component';
import { createComponent } from '@angular/core';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path: '', component: CourseCardComponent},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: AdminDashboardComponent},
    {path: 'manage', component: ManageCourseComponent}
];
