import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import {NativeScriptFormsModule, NativeScriptModule} from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'

import { NativeScriptMaterialButtonModule } from "@nativescript-community/ui-material-button/angular";
import { NativeScriptMaterialTextFieldModule } from "@nativescript-community/ui-material-textfield/angular";
import {LoginComponent} from "~/app/components/login/login.component";

import { installMixins } from '@nativescript-community/ui-material-core';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RegisterComponent} from "~/app/components/register/register.component";
installMixins();

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule,
            NativeScriptMaterialButtonModule,
            NativeScriptMaterialTextFieldModule,
            HttpClientModule,
            ReactiveFormsModule,
            NativeScriptFormsModule,
            AppRoutingModule],
  declarations: [AppComponent,
                  ItemsComponent,
                  ItemDetailComponent,
                  LoginComponent,
                  RegisterComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
