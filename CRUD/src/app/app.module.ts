import { MyserviceService } from './services/myservice.service';
import { AboutComponent } from './pages/about/about.component';
import { mainroutes } from './app.routes';

import { PostsComponent } from './pages/posts/posts.component';
import { PostComponent } from './pages/post/post.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';

import { 
  WpApiModule,
  WpApiLoader,
  WpApiStaticLoader
} from 'wp-api-angular'
import { HttpModule } from '@angular/http/src/http_module';



export function WpApiLoaderFactory(http) {
  return new WpApiStaticLoader(http, 'http://basma.cryptechsyndicate.com/wp-json/');
}
@NgModule({
  declarations: [
    AppComponent,PostsComponent,PostComponent,AboutComponent
  ],
  imports: [
    RouterModule.forRoot(mainroutes),
    BrowserModule,
    HttpModule,
    HttpClientModule,
    WpApiModule.forRoot({
      provide: WpApiLoader,
      useFactory: (WpApiLoaderFactory),
      deps: [HttpClientModule]
    }),
    
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
