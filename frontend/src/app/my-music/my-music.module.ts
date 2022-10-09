import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyMusicPageRoutingModule } from './my-music-routing.module';

import { MyMusicPage } from './my-music.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyMusicPageRoutingModule
  ],
  declarations: [MyMusicPage]
})
export class MyMusicPageModule {}
