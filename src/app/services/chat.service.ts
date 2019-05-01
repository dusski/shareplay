import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as io from 'socket.io-client';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class ChatService {

  private socket: SocketIOClient.Socket;

  private messageSubject: Subject<string> = new Subject<string>();

  constructor() {
    this.socket = io(environment.serverUrl);
  }

  getMessages(): Observable<string> {
    this.socket.on('new-message', (message: string) => {
      console.log(message);
      this.messageSubject.next(message);
    });

    return this.messageSubject.asObservable();
  }

  sendMessage(message: string) {
    this.socket.emit('new-message', message);
  }

}