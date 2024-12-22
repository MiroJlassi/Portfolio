import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { MeComponent } from './me/me.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
// Fire Base
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database'; 

/*image slider*/
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    MeComponent,
    ServicesComponent,
    ContactComponent,
    HomeComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    /* image slider*/
    SlickCarouselModule
  ],
  providers: [
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp({
      "projectId": "portfolio-projects-83398",
      "appId": "1:890483621302:web:994c5cbaadb2f1d8381517",
      "databaseURL": "https://portfolio-projects-83398-default-rtdb.firebaseio.com",
      "storageBucket": "portfolio-projects-83398.appspot.com",
      "apiKey": "AIzaSyCyO9aapJzt7ebk62P6QbKfc1ayy_pywsc",
      "authDomain": "portfolio-projects-83398.firebaseapp.com",
      "messagingSenderId": "890483621302",
      "measurementId": "G-4B9GFJ0WH8"
    })),
    provideDatabase(() => getDatabase())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
