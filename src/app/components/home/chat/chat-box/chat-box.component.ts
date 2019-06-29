import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { pipe } from '@angular/core/src/render3';
import { first } from 'rxjs/operators';

@Component({
  selector: 'shp-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
  host: {
    class: "chatbox p-3"
  }
})
export class ChatBoxComponent implements OnInit {

  message: string = ''

  constructor(
    private _chatService: ChatService
  ) { }

  ngOnInit() {
  }

  sendMessage() {
    this._chatService.sendMessage(this.message)
    this.message = ''
  }

}
