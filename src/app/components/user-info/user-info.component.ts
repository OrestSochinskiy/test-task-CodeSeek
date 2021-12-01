import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../models/IUser";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user: IUser
  constructor(private router: Router,private usersService: UsersService) {
    this.user = this.router.getCurrentNavigation()?.extras.state as IUser;

  }

  ngOnInit(): void {

  }


  Back() {
    history.back()
  }
}
