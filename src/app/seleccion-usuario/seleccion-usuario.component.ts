import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccion-usuario',
  templateUrl: './seleccion-usuario.component.html',
  styleUrl: './seleccion-usuario.component.css'
})
export class SeleccionUsuarioComponent {
  constructor(private router: Router, private el: ElementRef, private renderer: Renderer2) {
    this.setHeight('100%');
  }

  irALoginTripulacion() {
    this.router.navigate(['login']);
  }

  private setHeight(value: string) {
    const htmlElement = this.el.nativeElement.ownerDocument.documentElement;
    this.renderer.setStyle(htmlElement, 'height', value);
  }
}
