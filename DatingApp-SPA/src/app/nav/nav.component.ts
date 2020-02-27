import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertiftyService } from '../_services/alertifty.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(public authService: AuthService, private alerify: AlertiftyService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alerify.success('logged in successfully');
    },
    error => {
      this.alerify.error(error);
    }, () => {
      this.router.navigate(['/members']);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alerify.message('logged out');
    this.router.navigate(['/home']);
  }

}
