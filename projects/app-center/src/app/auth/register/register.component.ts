import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login, RestAuthService } from '../rest-auth.service';
import { Status, TokenService } from 'app-center-common';

@Component({
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  user = new Login('', '');
  repeatPassword = '';
  authError = false;

  constructor(private restAuthService: RestAuthService, private tokenService: TokenService, private router: Router) {}

  public register(): void {
    this.authError = false;
    this.restAuthService.register(this.user, resp => this.acceptResponse(resp), () => this.register());
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
    return this.user.username.trim().length > 0 && this.user.password.trim().length > 0 && this.repeatPassword.trim().length > 0;
  }
}
