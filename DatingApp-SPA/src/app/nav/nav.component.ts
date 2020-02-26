import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertiftyService } from '../_services/alertifty.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(public authService: AuthService, private alerify: AlertiftyService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alerify.success('logged in successfully');
    },
    error => {
      this.alerify.error(error);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alerify.message('logged out');
  }

}
