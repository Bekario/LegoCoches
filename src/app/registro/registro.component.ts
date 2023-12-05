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
  }
}