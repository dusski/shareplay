import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'shp-chat-log',
  templateUrl: './chat-log.component.html',
  styleUrls: ['./chat-log.component.scss'],
  host: {
    class: "chat-log"
  }
})
export class ChatLogComponent implements OnInit, OnDestroy {

  messages: string[] = []
  private _destruction$: Subject<any> = new Subject<any>()

  constructor(
    private _chatService: ChatService
  ) { }

  ngOnInit() {

    this._chatService.onNewMessage()
      .pipe(
        takeUntil(this._destruction$)
      )
      .subscribe(
        (message: string) => {
          // success
          this.messages = [...this.messages, message]
          console.log("FROM CHAT LOG SUBSCRIPTION: \n", this.messages)
        }
      )
  }

  ngOnDestroy() {
    this._destruction$.next()
    this._destruction$.complete()
  }

}
