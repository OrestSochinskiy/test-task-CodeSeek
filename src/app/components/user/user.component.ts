import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../models/IUser";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser
  constructor(private router: Router,private usersService: UsersService) { }

  ngOnInit(): void {
  }

  goToDetails() {
    this.router.navigate([this.user.id],{state: this.user})
  }

  del(id: number) {
    this.usersService.delItem(id);
  }
}
