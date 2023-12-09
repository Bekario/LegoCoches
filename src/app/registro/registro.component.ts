import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent {
  constructor(private router: Router) { }

  irAInicio() {
    this.router.navigate(['inicio']);
    window.scroll({
      top: 0,
      left: 0,
    });
  }

  volver() {
    this.router.navigate(['login']);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}