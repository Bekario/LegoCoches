import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';



@Component({
  selector: 'app-reservar-circuito',
  templateUrl: './reservar-circuito.component.html',
  styleUrl: './reservar-circuito.component.css'
})
export class ReservarCircuitoComponent implements OnInit{
  nombre: string = '';
  constructor(private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.nombre = params.get('nombre') || '';
    });
  }


  reservarCircuito(nombre: string) {
    this.router.navigate(['campeonato',  { nombre }]);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

}
