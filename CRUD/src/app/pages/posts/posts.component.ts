import { Component } from '@angular/core';
import { MyserviceService } from './../../services/myservice.service';

@Component({
    selector: 'posts',
    templateUrl: 'posts.component.html',
    styleUrls: ['posts.component.scss']
})
export class PostsComponent {
    constructor(public myshared:MyserviceService){
        this.myshared.setUser('bosy');
        this.myshared.setPass('456');
        console.log('data set by posts pages');
    }
}
