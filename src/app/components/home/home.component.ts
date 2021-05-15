import {Component, OnInit} from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {HomeService} from "~/app/services/HomeService";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  userId : number;
  userFullName : string;

  constructor(private route: ActivatedRoute, private homeService : HomeService, private router : Router) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe( params => {
      this.userId = this.route.snapshot.params.id
      console.log("el id recibido por param es: ")
      console.log(this.userId)

      //Hago request a servicio que devuelve datos grales..

      this.homeService.getHome(this.userId).subscribe( response  => {
          this.userFullName = response.firstName + " " + response.lastName
      }, error => {
        console.log("Ocurrio un error al intentar realizar el login :/ ")
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
