import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shp-chat-log',
  templateUrl: './chat-log.component.html',
  styleUrls: ['./chat-log.component.scss'],
  host: {
    class: "chat-log"
  }
})
export class ChatLogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
