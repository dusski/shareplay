import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'shp-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
  host: {
    class: "chatbox p-3"
  }
})
export class ChatBoxComponent implements OnInit {

  constructor(
    private _chatService: ChatService
  ) { }

  ngOnInit() {
  }

  sendMessage(chatbox: HTMLInputElement) {
    let { value: message } = chatbox;

    if (!message) {
      return;
    }

    this._chatService.sendMessage(message);
    chatbox.value = '';
  }

}
