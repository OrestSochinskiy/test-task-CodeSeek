import {Routes} from "@angular/router";
import {UsersComponent} from "../components/users/users.component";
import {UserInfoComponent} from "../components/user-info/user-info.component";
import {FormReactiveComponent} from "../components/form-reactive/form-reactive.component";

export let routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'create', component: FormReactiveComponent},
  {path: 'users/:id', component: UserInfoComponent, pathMatch: 'full'}
]
