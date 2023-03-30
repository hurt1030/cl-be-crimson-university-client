import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  currentUser: User;

  constructor(private userService: UserService, private authService: AuthService) {}

  ngOnInit(): void {
      this.userService.currentUserSubject.subscribe((user: User) => {
        console.log(user);
        this.currentUser = user;
      })
  }

  logout() {
    this.authService.logout();
  }
}
