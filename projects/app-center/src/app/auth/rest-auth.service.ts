import { Injectable } from '@angular/core';
import { RestHelperService, Status } from 'app-center-common';

export class Login {
  constructor(public username: string, public password: string, public email = '') {}
}


@Injectable({
  providedIn: 'root'
})
export class RestAuthService {

  constructor(private rest: RestHelperService) { }

  public login(user: Login, success: (resp: Status<string>) => void, reload: () => void): void {
    this.rest.postOnlyCritical(this.rest.getAuthServiceURL() + 'login/', user, success, reload);
  }

  public register(user: Login, success: (resp: Status<string>) => void, reload: () => void): void {
    this.rest.postOnlyCritical(this.rest.getAuthServiceURL() + 'register/', user, success, reload);
  }
}
