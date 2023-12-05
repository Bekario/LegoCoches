import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clasificacion-campeonato',
  templateUrl: './clasificacion-campeonato.component.html',
  styleUrl: './clasificacion-campeonato.component.css'
})
export class ClasificacionCampeonatoComponent implements OnInit {

  nombre: string = '';
  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.nombre = params.get('nombre') || '';
    });
  }
}
