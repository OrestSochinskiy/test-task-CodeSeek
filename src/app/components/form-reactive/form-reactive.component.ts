import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  name = new FormControl('', Validators.required)
  username = new FormControl('', Validators.required)
  phone = new FormControl('', [Validators.required,Validators.minLength(11)])
  email = new FormControl('',[Validators.required,Validators.email])
  city = new FormControl('')
  street = new FormControl('')
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

  constructor(private usersService: UsersService, private router: Router) {
  }

  ngOnInit(): void {
  }

  createId() {
    let id = (Date.now() + Math.random())
    id = Math.round(id)
    return id
  }

  save() {
    this.myForm.value.id = this.createId()
    console.log(this.myForm)
    this.usersService.pushItem(this.myForm.value)
    this.router.navigate(['users'])
  }
}
