import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carreras-tripulacion',
  templateUrl: './carreras-tripulacion.component.html',
  styleUrl: './carreras-tripulacion.component.css'
})
export class CarrerasTripulacionComponent {
  constructor(private router: Router) { }

  irAClasificacion(nombre: string) {
    this.router.navigate(['clasificacion-campeonato',  { nombre }]);
  }
}
