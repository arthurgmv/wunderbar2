import { Component } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { IUser } from '../../models/user';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userForm: FormGroup;
  
  constructor(private Login: LoginService) {
    this.userForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      
    });
  }
 
  submitForm() {
    const user: IUser = this.userForm.value;
    let userLoged = this.Login.ValidateUser(user);
    if(!userLoged){
      alert('User not found');
      return;
    }
    window.location.href = '/dashboard';
  }
  
}
