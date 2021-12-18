import { Injectable } from '@angular/core';

export class Friend {
  constructor(public id: number, public username: string, public online: boolean, public activity: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class RestFriendsService {

  constructor() { }
}
