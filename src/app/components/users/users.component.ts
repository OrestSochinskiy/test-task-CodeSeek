import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {IUser} from "../../models/IUser";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  filter: FormGroup;
  users: IUser[] = [];

  constructor(private usersService: UsersService) {

  }

  ngOnInit() {
    this.users = this.usersService.getAllFromLocal()
      this.filter = new FormGroup({
        filter: new FormControl('')
      })
  }

  onInput() {
    const filter = this.filter.controls['filter'].value
    if (filter) {
      this.users = this.usersService.getAllFromLocal().filter(value => value.name.includes(filter))
    } else {
      this.users = this.usersService.getAllFromLocal()
    }
  }
}
