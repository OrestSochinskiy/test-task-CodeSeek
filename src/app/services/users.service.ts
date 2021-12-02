import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private storageKey = 'users'
  private url: string = 'https://jsonplaceholder.typicode.com/users'
  constructor(private httpClient: HttpClient) {
  }

  private saveStorage(items: IUser[]){
    localStorage.setItem(this.storageKey, JSON.stringify(items))
  }

  getUsersFromJPH(): Observable<IUser[]>{
    let users = this.httpClient.get<IUser[]>(this.url)
    return users;
  }

  setItems(items: IUser[]){
    this.saveStorage(items)
  }
  getAllFromLocal(): IUser[] {
    const raw = localStorage.getItem(this.storageKey);
    return raw ? JSON.parse(raw) : []
  }

  delItem(id: number) {
    let users: IUser[] = []
    this.getAllFromLocal().filter(value => {
      if (value.id !== id){
        users.push(value)
      }
    });
    this.saveStorage(users);
  }

  pushItem(user: IUser){
    let users = this.getAllFromLocal()
    users.push(user)
    this.saveStorage(users)
  }

  editUser(item: IUser) {
    let users = this.getAllFromLocal()
    let index = users.findIndex((value => value.id === item.id))
    users[index].id = item.id
    users[index].name = item.name
    users[index].username = item.username
    users[index].email = item.email
    users[index].phone = item.phone
    users[index].address.city = item.address.city
    users[index].address.street = item.address.street
    this.saveStorage(users)
  }
}
