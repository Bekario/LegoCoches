import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-campeonato',
  templateUrl: './campeonato.component.html',
  styleUrl: './campeonato.component.css'
})
export class CampeonatoComponent implements OnInit {
  nombre: string = '';
  constructor(private router: Router, private route: ActivatedRoute) { }

  irAReservar() {
    this.router.navigate(['reservar_circuito']);
  }

  irAClasificacion(nombre: string) {
    this.router.navigate(['clasificacion-campeonato',  { nombre }]);
  }

  irACarreras() {
    this.router.navigate(['carreras']);
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.nombre = params.get('nombreCampeonato') || '';
    });
  }
}
