import { RouterModule, Routes } from '@angular/router'; //Importar modulo rutas
import { AboutUsComponent } from './components/about-us/about-us.component'; //Importar componente AboutUs
import { HomeComponent } from './components/home/home.component'; //Importar componente Home
import { CoverComponent } from './components/cover/cover.component'; //Importar componente Cover
import { InfoComponent } from './components/info/info.component'; //Importar componente Info

const app_routes : Routes = [ //Crea array con rutas
    { path: 'Home', component: HomeComponent }, //Agrega Home a rutas
    { path: 'About-Us', component: AboutUsComponent }, //Agrega About a rutas
    { path: 'Cover', component: CoverComponent }, //Agrega Cover a rutas
    { path: 'Info', component: InfoComponent }, //Ahrega Info a rutas
    { path: '**', pathMatch: 'full', redirectTo: 'Cover' } //Agrega Cover por default
];

export const app_routing = RouterModule.forRoot(app_routes); //Exportar rutas
