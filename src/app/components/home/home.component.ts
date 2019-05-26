import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router, ActivatedRoute, Params, RouterEvent, NavigationStart } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import { takeUntil, map, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'shp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    class: "content-wrapper d-flex flex-grow-1 flex-md-row flex-column",
  }
})
export class HomeComponent implements OnInit, OnDestroy {

  private _roomCode: string;
  private _destruction$: Subject<any> = new Subject<any>();

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    this._chatService.leaveRoom(this._roomCode);
  }

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _chatService: ChatService
  ) { }

  ngOnInit() {
    this._route.paramMap.pipe(
      takeUntil(this._destruction$),
      map((params: Params) => params.get('code'))
    ).subscribe(
      (code: string) => {
        console.log(code);
        if (!code) {
          code = this._chatService.generateRandomRoomCode()
          this._router.navigate(['/', code])
        }

        this._roomCode = code
        this._chatService.joinToRoom(code)

        // this.chatService
        //   .getMessages()
        //   .subscribe((message: string) => {
        //     this.messages = [...this.messages, message];
        //   });

      }
    )
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this._destruction$.next();
    this._destruction$.complete();
  }
}
