import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GorrrasComponent } from './pages/gorrras/gorrras.component';
import { GorraComponent } from './pages/gorra/gorra.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { Error404Component } from './pages/error404/error404.component';
import { LoginComponent } from './pages/login/login.component';
import { permissionsGuard } from './guards/permissions.guard';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { PagarComponent } from './pages/pagar/pagar.component';
import { HttpClientModule } from '@angular/common/http';
import { ComprasComponent } from './pages/compras/compras.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'pagar', component: PagarComponent },
    {path: 'gorras', component: GorrrasComponent, canActivate: [permissionsGuard] },
    {path: 'gorra/:id', component: GorraComponent},
    {path: 'acercade', component:AcercadeComponent },
    {path: 'login', component:LoginComponent},
    {path: 'carrito', component:CarritoComponent},
    {path: 'compras', component:ComprasComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'**', component: Error404Component},


];
