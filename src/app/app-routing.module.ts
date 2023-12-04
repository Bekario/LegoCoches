import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampeonatosComponent } from './campeonatos/campeonatos.component';
import { MainTripulacionComponent } from './main-tripulacion/main-tripulacion.component';
import { LoginComponent } from './login/login.component';
import { PerfilTripulacionComponent } from './perfil-tripulacion/perfil-tripulacion.component';
import { RegistroComponent } from './registro/registro.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirección para la ruta vacía
  { path: 'login', component: LoginComponent },
  { path: 'campeonato', component: CampeonatosComponent },
  { path: 'inicio', component: MainTripulacionComponent },
  { path: 'perfil', component: PerfilTripulacionComponent },
  { path: 'registro', component: RegistroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
