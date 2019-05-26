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

  generateRandomRoomCode(length: number = 6) {
    let resultString: string = '';
    const aplhaNumString: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
    for (let i = 0; i < length; i += 1) {
      const randomCharNumber: number = Math.floor(Math.random() * 62);
      resultString += aplhaNumString[randomCharNumber];
    }

    return resultString;
  }


}