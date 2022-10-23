import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MusicService } from './../services/music.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  updateMusicFg: FormGroup;
  id: any;

  constructor(
    private musicService: MusicService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.fetchMusic(this.id);
    this.updateMusicFg = this.formBuilder.group({
      name: [''],
      duration: ['']
    })
  }

  fetchMusic(id) {
    this.musicService.getMusic(id).subscribe((data) => {
      this.updateMusicFg.setValue({
        name: data['name'],
        duration: data['duration']
      });
    });
  }

  onSubmit() {
    if (!this.updateMusicFg.valid) {
      return false;
    } else {
      this.musicService.updateMusic(this.id, this.updateMusicFg.value)
        .subscribe(() => {
          this.updateMusicFg.reset();
          this.router.navigate(['/my-music']);
        })
    }
  }

}
