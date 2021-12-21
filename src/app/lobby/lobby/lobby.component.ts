import { Component } from '@angular/core';
import {IconProp, Styles} from '@fortawesome/fontawesome-svg-core';
import {Observable, of, OperatorFunction} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {RestFriendsService, Friend} from '../../core/rest-friends.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent {
  friends: Friend[] = [new Friend (0, 'Darela', false, ''), new Friend(1, 'Doderich', true, ''), new Friend(2, 'Herbert32', true, 'W2G')];

  addFriendSelection;
  friendSelector: ['UnknownDeaster', 'Väänsään'];

  friendToAdd: string;
  searching = false;
  searchFailed = false;

  constructor(private rest: RestFriendsService) { }

  onlineIcon(friend: Friend): IconProp {
    if (friend.online) { return ['fas', 'circle']; }
    else { return ['far', 'circle']; }
  }

  onlineStyle(friend: Friend): Styles {
    if (friend.online) { return {color: 'green'}; }
    else { return {}; }
  }

  search: OperatorFunction<string, readonly {string}[]> = (text$: Observable<string>) => text$.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    tap(() => this.searching = true),
    switchMap(term =>
      this.rest.findUsers(term).pipe(
        tap(() => this.searchFailed = false),
        catchError(() => {
          this.searchFailed = true;
          return of([]);
        })
      )
    ),
    tap(() => this.searching = false)
  )

}
