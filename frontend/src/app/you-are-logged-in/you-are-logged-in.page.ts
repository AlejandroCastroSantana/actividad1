import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../autentication/autentication.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-you-are-logged-in',
  templateUrl: './you-are-logged-in.page.html',
  styleUrls: ['./you-are-logged-in.page.scss'],
})
export class YouAreLoggedInPage implements OnInit {

  constructor(private authService: AuthService, private router: Router,
    private storage: Storage) { }

  ngOnInit() {
    
  }

  ionViewDidEnter(){
    
  }


  logout() {
    this.authService.logout().then(() => {
      this.router.navigateByUrl("/home");
    });
  }

}
