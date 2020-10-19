import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { TokenService } from './token.service';
import { filter, map } from 'rxjs/operators';

export class ClientMessage {
  constructor(public service: string, public resource: string, public version: number, public timestamp: number, public payload: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private messages: Subject<MessageEvent>;
  private initialized = false;

  constructor(private tokenService: TokenService) { }

  private initWebsocket(url: string): void {
    const socket = new WebSocket(url); // 'wss://messaging-service.tac.johannes-wirth.de/websocket');
    socket.onopen = () => socket.send(this.tokenService.getToken());
    const observable = Observable.create(
      (eventObserver: Observer<MessageEvent>) => {
        socket.onmessage = eventObserver.next.bind(eventObserver);
        socket.onerror = eventObserver.error.bind(eventObserver);
        socket.onclose = eventObserver.complete.bind(eventObserver);
        return socket.close.bind(socket);
      }
    );
    const observer = {
      next: (data: any) => {
        if (socket.readyState === WebSocket.OPEN) {
          socket.send(JSON.stringify(data));
        }
      }
    };
    this.messages =  Subject.create(observer, observable);
  }

  public subscribe(url: string, service: string, resource: string): Observable<ClientMessage> {
    if (!this.initialized) { this.initWebsocket(url); }
    return this.messages.pipe(map(ev => JSON.parse(ev.data))).pipe(filter(ev => ev.service === service && ev.resource === resource));
  }

}
