import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../autentication/autentication.service';
import { Usuario } from '../autentication/usuario';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  register(form) {
    let user: Usuario = {
      id: null,
      username: form.value.email,
      password: form.value.password,
      name: form.value.name,
      isAdmin: false
    };
    this.authService.register(user).subscribe((res) => {
      this.router.navigateByUrl('home');
    });
  }

}
