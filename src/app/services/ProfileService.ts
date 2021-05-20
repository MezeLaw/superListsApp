import {Injectable} from "@angular/core";
import {HttpClient, HttpParamsOptions} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {User} from "../interfaces/User";
import {throwError} from "rxjs";
import {HttpResponse} from "@nativescript/core";
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  //public url : String = "https://superlistsapi.herokuapp.com"
  public url : String = "http://10.0.2.2:8080"

  constructor(private http : HttpClient) { }


  public getProfile( userId : number){
    let params = new HttpParams();
    params.append('userId', userId.toString()),

      console.log("User id ===> En getProfile() " + userId)

    console.log("Entre al ProfileService.getProfile()---> Se intentara hacer el request --> ")


    return this.http.get(`${this.url}/api/userProfile/${userId}`)
      .pipe(
        map((data: User) => {
          return data;
        }), catchError( error => {
          return throwError( 'Something went wrong!' );
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
