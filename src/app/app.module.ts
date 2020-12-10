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
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    HomeComponent,
    CoverComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
