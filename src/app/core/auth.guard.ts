import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private tokenService: TokenService, private router: Router) {
  }

  canActivate(): Promise<boolean> | boolean {
    if (!this.tokenService.isAuthenticated()) {
      this.router.navigate(['auth/login']);
    }
    return true;
  }
}
