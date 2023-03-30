import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000/api/v1/users/'

  constructor(private http: HttpClient, private route: Router, private userService: UserService) { }

  signup(user: any) {
    return this.http.post(this.baseUrl + 'create', user);
  }

  login(user: any) {
    return this.http.post(this.baseUrl + 'login', user);
  }

  setToken(token: any) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  autoLogin() {
    const token = this.getToken();

    if (token == null) {
      this.route.navigate(['/login']);
    } else {
      this.http.get(this.baseUrl + 'me', {
        headers: {
          Authorization: `Bearer ${token.value}`
        }
      }).subscribe((user: User) => {
        this.userService.setCurrentUser(user);
        this.route.navigate(['/home']);
      });
    }
  }

  logout() {
    const token = this.getToken();

    if (token) {
      this.http.delete(this.baseUrl + 'logout', {
        headers: {
          Authorization: `Bearer ${token.value}`
        }
      }).subscribe((res: any) => {
        if (res.success) {
          this.setToken(null);
          this.userService.setCurrentUser(null);
          this.route.navigate(['/login']);
        }
      })
    }
  }

  getToken() {
    const token = localStorage.getItem('token');

    if (token != null) {
      return JSON.parse(token);
    } else {
      return null;
    }
  }
}
