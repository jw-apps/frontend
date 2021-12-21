import { Injectable } from '@angular/core';
import {RestHelperService, Status} from '../core/rest-helper.service';

export class LoginData {
  constructor(public username: string, public password: string) {}
}

export class RegisterData {
  constructor(public username: string, public password: string, public email = '', public invitation = '') {}
}


@Injectable({
  providedIn: 'root'
})
export class RestAuthService {

  constructor(private rest: RestHelperService) { }

  public login(user: LoginData, success: (resp: Status<string>) => void, reload: () => void): void {
    this.rest.postOnlyCritical(this.rest.getAuthServiceURL() + 'login/', user, success, reload);
  }

  public register(user: RegisterData, success: (resp: Status<string>) => void, reload: () => void): void {
    this.rest.postOnlyCritical(this.rest.getAuthServiceURL() + 'register/', user, success, reload);
  }
}
