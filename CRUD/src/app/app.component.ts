import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD';
  id:string="15";
  constructor(private myRouter: Router){}
  myRoutes() {
    this.myRouter.navigate(['/post',{id:this.id,name:'basma'}])
  }
  myRoutes2() {
    this.myRouter.navigate(['/post'],{queryParams:{id:this.id,status:true}})
  }
  myRoutes3() {
    this.myRouter.navigate(['/post']);
  }
  
}
