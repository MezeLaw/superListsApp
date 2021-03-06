import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'
import {LoginComponent} from "~/app/components/login/login.component";
import {RegisterComponent} from "~/app/components/register/register.component";
import {HomeComponent} from "~/app/components/home/home.component";
import {TaskListsComponent} from "~/app/components/taskLists/taskLists.component";
import {ProfileComponent} from "~/app/components/profile/profile.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'items', component: ItemsComponent },
  { path: 'item/:id', component: ItemDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home/:id', component: HomeComponent },
  { path: 'lists/:userId', component : TaskListsComponent},
  { path: 'profile/:userId', component : ProfileComponent}
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
