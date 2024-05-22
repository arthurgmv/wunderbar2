import { Routes } from '@angular/router';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ManageCourseComponent } from './components/manage-course/manage-course.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: '', component: CourseCardComponent},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: AdminDashboardComponent, canActivate: [authGuard]},
    {   path: "",
        children: [    
        {path: 'manage', component: ManageCourseComponent, canActivate: [authGuard]},
        {path: 'manage/:id', component: ManageCourseComponent, canActivate: [authGuard]}
    ]}
];
