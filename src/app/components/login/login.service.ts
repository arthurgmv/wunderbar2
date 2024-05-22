import { Injectable } from '@angular/core';
import { IUser } from '../../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiLoginService } from '../../api-service/api-login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apiLogin: ApiLoginService) { }

  ValidateUser(user: IUser) {
    const userFound = this.apiLogin.getUserByEmail(user.email);
     if(!userFound){ 
      return false;
    }
    if(userFound?.password === user.password && userFound?.role === "admin"){
      return userFound;
    }
    return false;
  }
}
