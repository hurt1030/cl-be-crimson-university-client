import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService, private route: Router, private userService: UserService) {}


  onSubmit() {
     this.authService.login(this.loginForm.value).subscribe((res: any) => {
      if (res.success) {
        this.userService.setCurrentUser(res.payload.user);
        this.authService.setToken(res.payload.token);
        this.route.navigate(['/home']);
      }
     });
  }

}
