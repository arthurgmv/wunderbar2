import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  API_Url = 'https://crudcrud.com/api/02ccc65edb634ec294cf6ae902f60814/users';
  userList: IUser[] = [];
  constructor(private http: HttpClient) {
    this.getAllUsers();
   }

  getUserByEmail(email: string) {
    const user = this.userList.find(user => user.email === email);
    return user;  
  }

  getAllUsers() {
    return this.http.get<IUser[]>(this.API_Url).subscribe((user: IUser[]) => {
      this.userList.push(...user);
      if (user.length < 1) {
        this.addInitialUsers();
      }
    });
  }

  addUser(user: IUser) {
    return this.http.post(this.API_Url, user);
  }

  addInitialUsers() {
    const users = [
      {
        id: 1,
        name: 'Ana',
        email: 'ana@santander.com',
        password: 'admin',
        role: 'admin'
      },
      {
        id: 2,
        name: 'Cintia',
        email: 'cintia@santander.com',
        password: 'admin',
        role: 'admin'
      },
      {
        id: 3,
        name: 'Arthur',
        email: 'arthur@santander.com',
        password: 'admin',
        role: 'admin'
      },
      {
        id: 4,
        name: 'Deividson',
        email: 'deividson@santander.com',
        password: 'admin',
        role: 'admin'
      }
    ];
    users.forEach(user => {
      this.addUser(user).subscribe();
    });
  }
}
