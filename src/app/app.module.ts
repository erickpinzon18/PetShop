import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import Header
import { HeaderComponent } from './components/header/header.component';
// Import Foother
import { FooterComponent } from './components/footer/footer.component';
// Import AboutUs
import { AboutUsComponent } from './components/about-us/about-us.component';
// Import Home
import { HomeComponent } from './components/home/home.component';
// Import Routes
import { app_routing } from './app.routes';
import { CoverComponent } from './components/cover/cover.component';
import { InfoComponent } from './components/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, //Declarar Header
    FooterComponent, //Declarar Footer
    AboutUsComponent, //Declarar About
    HomeComponent, //Declarar Home
    CoverComponent, //Declarar Cover
    InfoComponent //Declarar Info
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing //Declarar rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
