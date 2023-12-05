import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reservar-circuito',
  templateUrl: './reservar-circuito.component.html',
  styleUrl: './reservar-circuito.component.css'
})
export class ReservarCircuitoComponent {
  constructor(private router: Router) { }

  reservarCircuito() {
    this.router.navigate(['campeonato']);
  }

}
