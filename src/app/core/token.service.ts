import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token: string;

  constructor(private tokenStorage: TokenStorageService) {}

  public getToken(): string {
    if (!this.token) {
      console.log('Loading token from storage');
      this.token = this.tokenStorage.get();
      console.log(this.token);
    }
    return this.token;
  }

  public setToken(token: string): void {
    this.token = token;
    this.tokenStorage.set(token);
  }

  isAuthenticated(): boolean {
    return this.getToken() != null;
  }

  clear(): void {
    this.tokenStorage.clear();
    this.token = null;
  }
}
