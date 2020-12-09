import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { CoverComponent } from './components/cover/cover.component';

const app_routes : Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'About-Us', component: AboutUsComponent },
    { path: 'Cover', component: CoverComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'Home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
