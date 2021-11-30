import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {IUser} from "../../models/IUser";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user: IUser
  constructor(private router: Router) {
    this.user = this.router.getCurrentNavigation()?.extras.state as IUser;

  }

  ngOnInit(): void {

  }

  Back() {
    history.back()
  }
}
