import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUserSubject = new BehaviorSubject<User>(null);

  constructor() { }

  setCurrentUser(user: User) {
    this.currentUserSubject.next(user);
  }
}
