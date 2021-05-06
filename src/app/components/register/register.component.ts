import {Component, NgModule, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NativeScriptFormsModule} from "@nativescript/angular";
import {Page, ScrollEventData, ScrollView} from "@nativescript/core";
import {AuthService} from "../services/AuthService";

@Component({
  selector: 'app-home',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent {

  onScroll(args: ScrollEventData) {
    const scrollView = args.object as ScrollView
    //console.log('scrollX: ' + args.scrollX)
    //console.log('scrollY: ' + args.scrollY)
  }


  public registerForm = this.fb.group({
    email: [''],
    password: [''],
    nombre: [''],
    apellido: ['']
  })

  public loading : boolean = false;

  constructor(private fb: FormBuilder, private page : Page, private authService : AuthService) {
    page.actionBarHidden = true;
  }

  public register(){
    this.loading = true;
    console.log("Register con datos >>>>")
    console.log(this.registerForm.value);
    var email = this.registerForm.get('email').value
    var password = this.registerForm.get('password').value
    var nombre = this.registerForm.get('nombre').value
    var apellido = this.registerForm.get('apellido').value

    console.log("Se procedera a realizar el registro con el email ->"+ email)

    this.authService.register(email, password, nombre, apellido).subscribe( response =>{
      console.log(response)
      if(response.status == 200){
        console.log("Se realizo el registro satisfactoriamente.")
        this.loading = false;
      } else {
        this.loading = false;
        console.log("Ocurrio un error al intentar realizar el registro.")

      }

    }, error => {
      console.log(error)
      console.log("Ocurrio un error al intentar realizar el registro.")
      this.loading = false;
    })
  }






}
