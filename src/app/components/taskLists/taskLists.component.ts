import {Component, OnInit} from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {HomeService} from "~/app/services/HomeService";
import {Item} from "~/app/item/item";
import { registerElement } from '@nativescript/angular';
import { FloatingActionButton } from '@nativescript-community/ui-material-floatingactionbutton';
registerElement('MDFloatingActionButton', () => FloatingActionButton);

@Component({
  selector: 'app-taskLists',
  templateUrl: './taskLists.component.html',
  styleUrls: ['./taskLists.component.css'],
})

export class TaskListsComponent implements OnInit {

  userId : number;
  userFullName : string;

   items = new Array<Item>(
    { id: 1, name: 'Ter Stegen', role: 'Goalkeeper' },
    { id: 3, name: 'Piqué', role: 'Defender' },
    { id: 4, name: 'I. Rakitic', role: 'Midfielder' },
    { id: 5, name: 'Sergio', role: 'Midfielder' },
    { id: 6, name: 'Denis Suárez', role: 'Midfielder' },
    { id: 7, name: 'Arda', role: 'Midfielder' },
    { id: 8, name: 'A. Iniesta', role: 'Midfielder' },
    { id: 9, name: 'Suárez', role: 'Forward' },
    { id: 10, name: 'Messi', role: 'Forward' },
    { id: 11, name: 'Neymar', role: 'Forward' },
    { id: 12, name: 'Rafinha', role: 'Midfielder' },
    { id: 13, name: 'Cillessen', role: 'Goalkeeper' },
    { id: 14, name: 'Mascherano', role: 'Defender' },
    { id: 17, name: 'Paco Alcácer', role: 'Forward' },
    { id: 18, name: 'Jordi Alba', role: 'Defender' },
    { id: 19, name: 'Digne', role: 'Defender' },
    { id: 20, name: 'Sergi Roberto', role: 'Midfielder' },
    { id: 21, name: 'André Gomes', role: 'Midfielder' },
    { id: 22, name: 'Aleix Vidal', role: 'Midfielder' },
    { id: 23, name: 'Umtiti', role: 'Defender' },
    { id: 24, name: 'Mathieu', role: 'Defender' },
    { id: 25, name: 'Masip', role: 'Goalkeeper' }
  )

  constructor(private route: ActivatedRoute, private homeService : HomeService, private router : Router) {
  }

  ngOnInit() {

    console.log("NgOnInit de taskListsComponent")

   this.route.queryParams.subscribe( params => {
      this.userId = this.route.snapshot.params.userId
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

  goHome() {
    this.router.navigate(["home", this.userId])
  }
}
