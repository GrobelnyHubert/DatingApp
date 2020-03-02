import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/_models/user';
import { ActivatedRoute } from '@angular/router';
import { AlertiftyService } from 'src/app/_services/alertifty.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm',  {static: true}) editForm: NgForm;
  user: User;

  constructor(private route: ActivatedRoute, private alerityfy: AlertiftyService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }

  updateUser() {
    console.log(this.user);
    this.alerityfy.success('Prosile update successully');
    this.editForm.reset(this.user);

  }
}
