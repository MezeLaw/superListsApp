import {Component, NgModule, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NativeScriptFormsModule} from "@nativescript/angular";
import {Page, ScrollEventData, ScrollView} from "@nativescript/core";
import {AuthService} from "~/app/services/AuthService";
import {showActionSnackbar, showColorfulSnackbar} from "~/app/components/snackbar/Snackbar";


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

  public register() {
    this.loading = true;
    console.log("Register con datos >>>>")
    console.log(this.registerForm.value);
    var email = this.registerForm.get('email').value
    var password = this.registerForm.get('password').value
    var nombre = this.registerForm.get('nombre').value
    var apellido = this.registerForm.get('apellido').value

    console.log("Se procedera a realizar el registro con el email ->" + email)

    if (email == "" || password == "" || nombre == "" || apellido == "") {
      this.loading = false
      showActionSnackbar("Debe completar todos los campos para el registro.", "Cerrar", 10000)
    } else {

      this.authService.register(email, password, nombre, apellido).subscribe(response => {
        console.log(response)
        if (response.status == 200) {
          console.log("Se realizo el registro satisfactoriamente.")
          showColorfulSnackbar("Registro exitoso!!", "white", "white", "green")
          this.loading = false;
        } else {
          this.loading = false;
          console.log("Ocurrio un error al intentar realizar el registro.")
          showColorfulSnackbar("Ocurrio un error al intentar realizar el registro.", "white", "white", "red")
        }

      }, error => {
        console.log(error)
        console.log("Ocurrio un error al intentar realizar el registro.")
        this.loading = false;
        showColorfulSnackbar("Ocurrio un error al intentar realizar el registro.", "white", "white", "red")
      })
    }

  }
  onFocus($event: FocusEvent) {

  }

  onBlur($event: FocusEvent) {

  }

  onTextChange($event: any) {

  }
}
