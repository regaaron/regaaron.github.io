import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { DescubreComponent } from './componentes/descubre/descubre.component';
import { RegistrosComponent } from './componentes/registros/registros.component';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home' ,component: HomeComponent},
    {path: 'about' ,component: AboutComponent},
    {path: 'descubre', component: DescubreComponent},
    {path: 'registros',component: RegistrosComponent},
];
