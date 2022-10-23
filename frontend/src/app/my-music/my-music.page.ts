import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-music',
  templateUrl: './my-music.page.html',
  styleUrls: ['./my-music.page.scss'],
})
export class MyMusicPage implements OnInit {

  music: any = [];

  constructor(
    private musicService: MusicService,
    private router: Router
    ) { }

  ngOnInit() {}

  /*getAllMusic() {
    this.musicService.getMusics().subscribe(response => {
      this.music = response;
    });
  }*/

  ionViewDidEnter() {
    this.musicService.getMusics().subscribe((response) => {
      this.music = response;
    })
  }
  
  removeMusic(music, i) {
    if (window.confirm('Are you sure')) {
      this.musicService.deleteMusic(music.id)
      .subscribe(() => {
          this.ionViewDidEnter();
          console.log('Music deleted!')
        }
      )
    }
  }

}
