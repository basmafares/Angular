import { Component } from '@angular/core';
import { AboutComponent } from './pages/about/about.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostComponent } from './pages/post/post.component';
import {RouterModule,Routes} from "@angular/router";


export const mainroutes:Routes=[
    {
      path:'posts',
      component:PostsComponent
  
    },
    {
      path:'post/:id',
      component:PostComponent
    }
    ,
    {
      path:'about',
      component:AboutComponent

    }
    ,
    {
      path:'',
      component:PostsComponent
    }
    ,
    {
      path:'**',
      component:PostsComponent
    }
  ]