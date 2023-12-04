import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampeonatosComponent } from './campeonatos/campeonatos.component';
import { MainTripulacionComponent } from './main-tripulacion/main-tripulacion.component';



const routes: Routes = [
  { path: 'pagina1', component: CampeonatosComponent },
  { path: 'pagina2', component: MainTripulacionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
