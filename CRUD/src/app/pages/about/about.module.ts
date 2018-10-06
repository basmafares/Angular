// Angular Imports
import { NgModule } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

// This Module's Components
import { AboutComponent } from './about.component';

@NgModule({
    imports: [

    ],
    declarations: [
        AboutComponent,
    ],
    exports: [
        AboutComponent,

    ]
})
export class AboutModule {
    id:string;
    name:string;
    status:string;
    constructor(private myActiveRouter:ActivatedRoute){
       // this.id=this.myActiveRouter.snapshot.queryParamMap.get('id');
       // this.name=this.myActiveRouter.snapshot.queryParamMap.get('name');
       // this.status=this.myActiveRouter.snapshot.queryParams['status'];
       console.log("about");
    }

}
