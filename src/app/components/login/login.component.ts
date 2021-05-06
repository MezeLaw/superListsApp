import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {Page, ScrollEventData, ScrollView} from "@nativescript/core";
import {AuthService} from "~/app/services/AuthService";
import {showActionSnackbar, showColorfulSnackbar} from "~/app/components/snackbar/Snackbar";


@Component({
  selector: 'app-home',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent  {

  public loginForm = this.fb.group({
    email: [''],
    password: ['']
  })

  loading : boolean = false;

  constructor(private fb: FormBuilder, private router : Router, page : Page, private authService : AuthService) {
    page.actionBarHidden = true;
    this.loading = false;
  }

  onScroll(args: ScrollEventData) {
    const scrollView = args.object as ScrollView

  }

  public login(){
    this.loading = true;

    console.log("Login con datos >>>>")
    console.log(this.loginForm.value);
    if(this.loginForm.get('email').value == "" || this.loginForm.get('password').value == ""){
      this.loading = false
      showActionSnackbar("Debe ingresar su usuario y contraseña", "Cerrar", 10000)
    } else {
      this.authService.login(this.loginForm.get('email').value, this.loginForm.get('password').value).subscribe(response => {
        console.log("Response del login --->");
        console.log(response.headers);
        this.loading = false;
        this.router.navigate(['home'])
      }, error => {
        console.log("Ocurrio un error al intentar realizar el login :/ ")
        console.log(error)
        this.loading = false;
        showActionSnackbar(error.error.message, "Cerrar", 10000)
      })
    }
  }

  public register(){
    console.log("Register...")

    this.router.navigate(['register'])
  }


  onTextChange($event: any) {

  }

  onFocus($event: FocusEvent) {

  }

  onBlur($event: FocusEvent) {

  }

}
