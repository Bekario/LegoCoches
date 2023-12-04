import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { BarraInferiorComponent } from './barra-inferior/barra-inferior.component';
import { RegistroComponent } from './registro/registro.component';
import { MainTripulacionComponent } from './main-tripulacion/main-tripulacion.component';
import { CarruselNoticiasComponent } from './carrusel-noticias/carrusel-noticias.component';
import { PerfilTripulacionComponent } from './perfil-tripulacion/perfil-tripulacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BarraNavegacionComponent,
    BarraInferiorComponent,
    RegistroComponent,
    MainTripulacionComponent,
    CarruselNoticiasComponent,
    PerfilTripulacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
