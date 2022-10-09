import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-my-music',
  templateUrl: './my-music.page.html',
  styleUrls: ['./my-music.page.scss'],
})
export class MyMusicPage implements OnInit {

  music: any = [
    {
      id: 1,
      name: "Imagine",
      duration: "4 minutes"
    },{
      id: 2,
      name: "Yesterday",
      duration: "5 minutes"
    }
  ];

  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.getAllMusic();
  }

  getAllMusic() {
    this.musicService.getMusic().subscribe(response => {
      this.music = response;
    });
  }

}
