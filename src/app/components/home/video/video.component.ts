import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shp-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  host: {
    class: "video-wrapper flex-md-grow-1 flex-grow-0"
  }
})
export class VideoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
