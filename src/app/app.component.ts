import {Component, OnInit} from '@angular/core';
import {UsersService} from "./services/users.service";
import {IUser} from "./models/IUser";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: IUser[]
  constructor(private usersService: UsersService,private router: Router) {
    let length = JSON.parse(<string>localStorage.getItem('users')) || [];
    length = length.length
    if (length === 0) {
      this.usersService.getUsersFromJPH().subscribe(value => {
        this.users = value
        this.usersService.setItems(this.users)
      })
    }else{
      this.users = this.usersService.getAllFromLocal()
      this.usersService.setItems(this.users)
    }
  }

}
