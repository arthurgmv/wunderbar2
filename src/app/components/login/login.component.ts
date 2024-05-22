import { Component } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { IUser } from '../../models/user';
import { LoginService } from './login.service';
import { AuthService } from '../../guards/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userForm: FormGroup;
  
  constructor(private Login: LoginService, private authService: AuthService, private router: Router) {
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
      alert('USUARIO INVÁLIDO!  \n\n Utilize algum dos Emails abaixo: \n\n\t ana@santander.com \n\t cintia@santander.com \n\t arthur@santander.com \n\t deividson@santander.com \n\n\t Senha: admin');
      return;
    }
    
      const loggedIn = this.authService.loginUser(userLoged);
      if(loggedIn){
        this.router.navigate(['/dashboard']);
      } else {
        alert('E-mail ou senha inálidos!');
      }
    
  }
  
}
