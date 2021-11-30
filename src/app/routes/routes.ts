import {Routes} from "@angular/router";
import {UsersComponent} from "../components/users/users.component";
import {UserInfoComponent} from "../components/user-info/user-info.component";

export let routes: Routes = [
  {path: '', component: UsersComponent},
  {path: ':id',component: UserInfoComponent,pathMatch: 'full'}
]
