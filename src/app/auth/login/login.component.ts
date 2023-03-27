import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private authService: AuthService, private route: Router) {}


  onSubmit() {
     this.authService.login(this.loginForm.value).subscribe((res: any) => {
      if (res.success) {
        this.route.navigate(['/home']);
      }
     });
  }

}
