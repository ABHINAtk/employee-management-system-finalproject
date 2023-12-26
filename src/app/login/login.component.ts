import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username!: string;
  password!: string;
  loginSuccess: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.username, this.password)
      .subscribe((success) => {
        if (success) {
          this.loginSuccess = true;
          this.router.navigate(['/dashboard']);
        } else {
          alert('Invalid credentials');
        }
      });
  }
}
