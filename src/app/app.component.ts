import { Component } from '@angular/core';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'shp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  messages: string[] = [];

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        console.log(message);
        this.messages = [...this.messages, message];
        console.log(this.messages);
      });
  }

  sendMessage(message: string) {
    if (!message) {
      return;
    }

    this.chatService.sendMessage(message);
  }
}
