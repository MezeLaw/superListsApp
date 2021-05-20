import {Component, OnInit} from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {HomeService} from "~/app/services/HomeService";
import {ProfileService} from "~/app/services/ProfileService";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})

export class ProfileComponent implements OnInit {

  userId : number;
  userFullName : string;

  constructor(private route: ActivatedRoute, private profileService : ProfileService, private router : Router) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe( params => {
      this.userId = this.route.snapshot.params.userId
      console.log("el id recibido por param es: ")
      console.log(this.userId)

      //Hago request a servicio que devuelve datos grales..

      this.profileService.getProfile(this.userId).subscribe( response  => {
          this.userFullName = response.firstName + " " + response.lastName
        console.log(response)
      }, error => {
        console.log("Ocurrio un error al intentar realizar el request :/ ")
        console.log(error)
        this.router.navigate(["/login"])
      })
    })

  }



  onDelete() {

  }

  onBottomNavigationTabSelected($event: any) {

  }

  onBottomNavigationTabPressed($event: any) {

  }

  getListas() {
    console.log("Apretaste en listas")
    this.router.navigate(["/lists", this.userId])
  }
}
