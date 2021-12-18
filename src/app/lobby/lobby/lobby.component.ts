import { Component } from '@angular/core';
import {Friend} from '../rest-friends.service';
import {IconProp, Styles} from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent {
  friends: Friend[] = [new Friend (0, 'Darela', false, ''), new Friend(1, 'Doderich', true, ''), new Friend(2, 'Herbert32', true, 'W2G')];

  addFriendSelection;
  friendSelector: ['UnknownDeaster', 'Väänsään'];

  constructor() { }

  onlineIcon(friend: Friend): IconProp {
    if (friend.online) { return ['fas', 'circle']; }
    else { return ['far', 'circle']; }
  }

  onlineStyle(friend: Friend): Styles {
    if (friend.online) { return {color: 'green'}; }
    else { return {}; }
  }

}
