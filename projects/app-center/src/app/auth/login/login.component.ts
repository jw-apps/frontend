import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Status, TokenService } from 'app-center-common';
import { Login, RestAuthService } from '../rest-auth.service';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent {
  user = new Login('', '');
  authError = false;

  constructor(private restAuthService: RestAuthService, private tokenService: TokenService, private router: Router) {}

  public login(): void {
    this.authError = false;
    this.restAuthService.login(this.user, resp => this.acceptResponse(resp), () => this.login());
  }

  private acceptResponse(resp: Status<string>): void {
    if (resp.error) {
      if (resp.message === 'AUTHENTICATION_ERROR') {
        this.authError = true;
      }
    } else {
      this.tokenService.setToken(resp.value);
      this.router.navigate(['/']);
    }
  }

  public allFilled(): boolean {
    return this.user.username.trim().length > 0 && this.user.password.trim().length > 0;
  }
}
