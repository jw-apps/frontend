import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  /**
   * @ignore
   */
  private cookieName = 'app-center-auth-token';

  /**
   * @ignore
   */
  constructor(private cookieService: CookieService, private environmentService: EnvironmentService) {
  }

  set(token: string): void {
    console.log('saving token ' + token);
    this.cookieService.put(this.cookieName, token, {secure: !this.environmentService.test, httpOnly: false});
  }

  get(): string {
    return this.cookieService.get(this.cookieName);
  }

  clear(): void {
    this.cookieService.remove(this.cookieName);
  }
}
