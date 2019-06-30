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

  videoLink: string = 'https://r5---sn-aigzrn7z.googlevideo.com/videoplayback?id=o-ACvMyOVuE5VrTyAqN8XPkCp10wGuoVEBhCInWUhkaUDO&itag=18&source=youtube&requiressl=yes&mm=31%2C26&mn=sn-aigzrn7z%2Csn-q0c7rn76&ms=au%2Conr&mv=u&pl=23&ei=E7LOXNuaFtPcgAeC4JvQBQ&mime=video%2Fmp4&gir=yes&clen=21353298&ratebypass=yes&dur=243.577&lmt=1540761159262627&mt=1557049175&fvip=5&c=WEB&txp=5431432&ip=95.211.148.251&ipbits=0&expire=1557071475&sparams=ip%2Cipbits%2Cexpire%2Cid%2Citag%2Csource%2Crequiressl%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cei%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&key=yt8&signature=3FF4E2DEE2CADEB76FAE38B6C10EFC9D2DF27F30.7F75D135569AF73B349DA975ECB5BCD365445431';

  constructor() { }

  ngOnInit() {
  }

}
