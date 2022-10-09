import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyMusicPage } from './my-music.page';

const routes: Routes = [
  {
    path: '',
    component: MyMusicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyMusicPageRoutingModule {}
