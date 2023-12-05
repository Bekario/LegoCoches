import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.css'
})
export class BarraNavegacionComponent {
  constructor(private router: Router) { }
  
  irAPerfil() {
    this.router.navigate(['perfil']);
  }

  irACampeonato() {
    this.router.navigate(['campeonato']);
  }
  irACampeonatos() {
    this.router.navigate(['campeonatos']);
  }

  irAInicio() {
    this.router.navigate(['inicio']);
  }

  cerrarSesion() {
    this.router.navigate(['seleccion_usuario']);

  }
}
