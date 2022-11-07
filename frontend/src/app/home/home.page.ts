import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name: string = "Imagine";
  duration: string = "4 minutes";

  constructor(private router: Router) { }

  gotoMyMusic() {
    this.router.navigateByUrl("/my-music")
  }

  gotoLogin() {
    this.router.navigateByUrl("/login")
  }

}
