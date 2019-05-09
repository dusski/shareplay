import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { VideoComponent } from './components/home/video/video.component';
import { ChatComponent } from './components/home/chat/chat.component';
import { ChatLogComponent } from './components/home/chat/chat-log/chat-log.component';
import { ChatBoxComponent } from './components/home/chat/chat-box/chat-box.component';
import { MessageComponent } from './components/home/chat/chat-log/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoComponent,
    ChatComponent,
    ChatLogComponent,
    ChatBoxComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
