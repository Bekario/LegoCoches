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
import { CampeonatosComponent } from './campeonatos/campeonatos.component';
import { ReservarCircuitoComponent } from './reservar-circuito/reservar-circuito.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BarraNavegacionComponent,
    BarraInferiorComponent,
    RegistroComponent,
    MainTripulacionComponent,
    CarruselNoticiasComponent,
    PerfilTripulacionComponent,
    CampeonatosComponent,
    ReservarCircuitoComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    
  ],
  providers: [
    provideClientHydration(),
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }, // Configura el idioma a español
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
