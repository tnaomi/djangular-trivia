import { NgModule } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";//this is a toolbar
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';//routing
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TriviaComponent } from './trivia/trivia.component';//generated component
import { HttpClientModule } from "@angular/common/http";//inorder to communicate with the backend API
import { FormsModule } from "@angular/forms";
import { MatRadioModule } from "@angular/material/radio";//to get a radio button for the multiple choices
import { MatButtonModule } from "@angular/material/button";

import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    TriviaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    MatRadioModule,
    MatButtonModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
