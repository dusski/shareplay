import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as io from 'socket.io-client';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class ChatService {

  private _roomCode: string;
  private socket: SocketIOClient.Socket
  private messageSubject: Subject<string> = new Subject<string>()

  constructor() {
    if (!environment.serverUrl) {
      return
    }

    this.socket = io(environment.serverUrl)

    this.socket.on(ChatCode.MESSAGE, (message: string) => {
      console.log(message)
      this.messageSubject.next(message)
    })
  }

  onNewMessage(): Observable<string> {
    return this.messageSubject.asObservable()
  }

  sendMessage(message: string) {
    this.socket.emit(ChatCode.MESSAGE, message, this._roomCode)
  }

  joinRoom(roomCode: string) {
    if (!roomCode) {
      return
    }

    this._roomCode = roomCode;

    this.socket.emit(ChatCode.JOIN, roomCode)
  }

  leaveRoom(roomCode: string) {
    if (!roomCode) {
      return
    }

    this.socket.emit(ChatCode.LEAVE, roomCode)
  }

  generateRandomRoomCode(length: number = 6) {
    let resultString: string = ''
    const aplhaNumString: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    for (let i = 0; i < length; i += 1) {
      const randomCharNumber: number = Math.floor(Math.random() * 62)
      resultString += aplhaNumString[randomCharNumber]
    }

    return resultString
  }

}

export enum ChatCode {
  MESSAGE = 'new-message',
  JOIN = 'join-room',
  LEAVE = 'leave-room'
}