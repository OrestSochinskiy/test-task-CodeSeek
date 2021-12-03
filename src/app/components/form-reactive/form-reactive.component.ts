import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  name = new FormControl(history.state.name || '', Validators.required)
  username = new FormControl(history.state.username || '', Validators.required)
  phone = new FormControl(history.state.phone || '', [Validators.required, Validators.minLength(11)])
  email = new FormControl(history.state.email || '', [Validators.required])
  city = new FormControl(history.state.address?.city || '')
  street = new FormControl(history.state.address?.street || '')
  myForm: FormGroup = new FormGroup({
    name: this.name,
    username: this.username,
    email: this.email,
    phone: this.phone,
    address: new FormGroup({
      city: this.city,
      street: this.street
    })
  })
  type: string = ''

  constructor(private usersService: UsersService, private router: Router) {
    if (history.state.name) {
      this.type = 'edit'
    } else {
      this.type = 'create'
    }
  }

  edit() {
  }

  ngOnInit(): void {
  }

  createId() {
    let id = (Date.now() + Math.random())
    id = Math.round(id)
    return id
  }

  save() {
    if (this.type == 'edit') {
      this.myForm.value.id = history.state.id
      this.usersService.editUser(this.myForm.value)
      this.router.navigate(['users'])
    } else {
      this.myForm.value.id = this.createId()
      this.usersService.pushItem(this.myForm.value)
      this.router.navigate(['users'])
    }
  }
}
