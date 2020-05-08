import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {createCustomElement} from '@angular/elements';

import { AppComponent } from './app.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  // bootstrap:[AppComponent],
  entryComponents: [MovieSearchComponent]
})
export class AppModule {

  constructor(private injector:Injector){
     const customsearch=createCustomElement(MovieSearchComponent,{injector:injector});
     customElements.define('movie-search',customsearch); 
  }
  ngDoBootstrap(){
    
  }
 }
