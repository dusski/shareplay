import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shp-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  host: {
    class: "chat-wrapper d-flex flex-grow-1"
  }
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
