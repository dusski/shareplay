import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shp-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
  host: {
    class: "chatbox p-3"
  }
})
export class ChatBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
