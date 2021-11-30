import { Component } from '@angular/core';
import {UsersService} from "./services/users.service";
import {IUser} from "./models/IUser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: IUser[]
  constructor(private usersService: UsersService) {
    this.usersService.getUsersFromJPH().subscribe(value => {
      this.users = value
      this.usersService.setItems(this.users)
    })
  }
}
