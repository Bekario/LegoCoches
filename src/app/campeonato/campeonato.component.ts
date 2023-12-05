import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-campeonato',
  templateUrl: './campeonato.component.html',
  styleUrl: './campeonato.component.css'
})
export class CampeonatoComponent {
  constructor(private router: Router) { }

  irAReservar() {
    this.router.navigate(['reservar_circuito']);
  }

  irAClasificacion() {
    this.router.navigate(['clasificacion-campeonato']);
  }
}
