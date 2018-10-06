import { MyserviceService } from './../../services/myservice.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
    selector: 'post',
    templateUrl: 'post.component.html',
    styleUrls: ['post.component.scss']
})
export class PostComponent {
  name:string;
  status:string;
  constructor(private myroute:ActivatedRoute,public myshare:MyserviceService){
    //this.name=myroute.snapshot.queryParamMap.get('name');
    //this.status=myroute.snapshot.queryParamMap.get('status');
    //console.log("post status"+this.status+"post name"+this.name);
    console.log(this.myshare.getUser());
    console.log(this.myshare.getPass());
  }
}
