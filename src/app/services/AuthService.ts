import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpResponse, Observable} from "@nativescript/core";
import {User} from "~/app/interfaces/User";
import {map, catchError} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    //public url : String = "https://superlistsapi.herokuapp.com"
    public url : String = "http://10.0.2.2:8080"

    constructor(private http : HttpClient) { }

    public login(email : String, password : String){

        var loginRequest = {
            email : email,
            password : password
        };

        console.log("Entre al AuthService.Login().. Se intentara hacer el request --> ")

      return this.http.post(`${this.url}/api/login`, loginRequest, )
          .pipe(
            map((data: User) => {
              return data;
            }), catchError( error => {
              return throwError( error );
            })
        )
    }


    public register(email : String, password : String, firstName : String, lastName : String){

        var registerRequest = {
            email : email,
            password : password,
            firstName : firstName,
            lastName : lastName
        };

        console.log("Entre al AuthService.Login().. Se intentara hacer el request --> ")
        return this.http.post<HttpResponse>(`${this.url}/api/register`, registerRequest, {observe: 'response'})
    }

}
