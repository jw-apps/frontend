import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterData, RestAuthService } from '../rest-auth.service';
import { Status, TokenService } from 'app-center-common';

@Component({
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  user = new RegisterData('', '');
  repeatPassword = '';
  userExists = false;
  noInvitation = false;

  constructor(private restAuthService: RestAuthService, private tokenService: TokenService, private router: Router) {}

  public register(): void {
    this.userExists = false;
    this.noInvitation = false;
    this.restAuthService.register(this.user, resp => this.acceptResponse(resp), () => this.register());
  }

  private acceptResponse(resp: Status<string>): void {
    if (resp.error) {
      if (resp.message === 'USER_EXISTS') {
        this.userExists = true;
      } else if (resp.message === 'INCORRECT_INVITATION') {
        this.noInvitation = true;
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
