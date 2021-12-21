import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  // The values that are defined here are the default values that can
  // be overridden by env.js

  public url = '';

  public apiUrl = 'apps.johannes-wirth.de/';

  public test = false;

  constructor() {
  }

}
