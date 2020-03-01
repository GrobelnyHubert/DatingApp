import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AlertiftyService } from '../../_services/alertifty.service';
import { error } from 'protractor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  users: User[];
  constructor(private userSerive: UserService, private alertify: AlertiftyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data['users'];
    });
  }

  // loadUsers() {
  //   this.userSerive.getUsers().subscribe((users: User[]) => {
  //     this.users = users;
  //   },error => {
  //     this.alertify.error(error);
  //   });
  // }
}
