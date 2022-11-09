import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MusicService } from './../services/music.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})

export class CreatePage implements OnInit {

  userForm: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private musicService: MusicService,
    private photoService: PhotoService
  ) {
    this.userForm = this.formBuilder.group({
      name: [''],
      duration: ['']
   })
  }

  takePhoto() {
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  pickImage() {
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    this.capturedPhoto = null;
  }

  ionViewWillEnter() {
    this.userForm.reset();
    this.isSubmitted = false;
    this.capturedPhoto = "";
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      duration: ['', [Validators.required]]
    })
  }

  get errorControl() {
    return this.userForm.controls;
  }

  onSubmit() {
    if (!this.userForm.valid) {
      return false;
    } else {
      this.musicService.createMusic(this.userForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.userForm.reset();
            this.router.navigate(['/my-music']);
          })
        });
    }
  }

  async submitForm() {
    this.isSubmitted = true;
    if (!this.userForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      let blob = null;
      if (this.capturedPhoto != "") {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      }

      this.musicService.createMusic(this.userForm.value).subscribe(data => {
        console.log("Photo sent!");
        this.router.navigateByUrl("/my-music");
      })
    }
  }

}
