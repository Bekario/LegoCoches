import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampeonatosComponent } from './campeonatos/campeonatos.component';
import { MainTripulacionComponent } from './main-tripulacion/main-tripulacion.component';
import { LoginComponent } from './login/login.component';
import { PerfilTripulacionComponent } from './perfil-tripulacion/perfil-tripulacion.component';
import { RegistroComponent } from './registro/registro.component';
import { ReservarCircuitoComponent } from './reservar-circuito/reservar-circuito.component';
import { CampeonatoComponent } from './campeonato/campeonato.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirección para la ruta vacía
  { path: 'login', component: LoginComponent },
  { path: 'campeonatos', component: CampeonatosComponent },
  { path: 'campeonato', component: CampeonatoComponent },
  { path: 'inicio', component: MainTripulacionComponent },
  { path: 'perfil', component: PerfilTripulacionComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'reservar_circuito', component: ReservarCircuitoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
