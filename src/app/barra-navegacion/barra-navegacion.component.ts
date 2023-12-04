import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.css'
})
export class BarraNavegacionComponent {
  constructor(private router: Router) { }
  
  irAPagina1() {
    this.router.navigate(['/pagina1']);
  }
}
