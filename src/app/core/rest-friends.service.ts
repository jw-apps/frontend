import { Injectable } from '@angular/core';
import {RestHelperService} from './rest-helper.service';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {of} from 'rxjs';

export class Friend {
  constructor(public id: number, public username: string, public online: boolean, public activity: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class RestFriendsService {

  constructor(private http: HttpClient, private rest: RestHelperService) { }

  public findUsers(user: string) {
    if (user === '') return of([]);
    const headers = this.rest.getHeaders();
    return this.http.get(this.rest.getAuthServiceURL() + 'users?username=' + user, {headers}).pipe(map(
      response => response['value']));
  }
}
