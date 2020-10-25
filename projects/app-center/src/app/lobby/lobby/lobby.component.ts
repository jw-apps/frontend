import { Component } from '@angular/core';
import {Friend} from '../rest-friends.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent {
  friends: Friend[] = [new Friend (0, 'Darela', false, ''), new Friend(1, 'Doderich', true, ''), new Friend(2, 'Herbert32', true, 'W2G')];

  constructor() { }

}
