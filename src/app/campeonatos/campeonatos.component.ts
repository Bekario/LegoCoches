import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campeonatos',
  templateUrl: './campeonatos.component.html',
  styleUrl: './campeonatos.component.css'
})
export class CampeonatosComponent {
constructor(private router: Router) { }

  irACampeonato(nombreCampeonato: string) {
    this.router.navigate(['campeonato',  { nombreCampeonato }]);
  }
}
