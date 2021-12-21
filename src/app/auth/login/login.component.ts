import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {TokenService} from '../../core/token.service';
import {Status} from '../../core/rest-helper.service';
import {LoginData, RestAuthService} from '../../core/rest-auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = new LoginData('', '');
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
