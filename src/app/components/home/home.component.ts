import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    class: "content-wrapper d-flex flex-grow-1 flex-md-row flex-column",
  }
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
