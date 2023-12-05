import { Component, ElementRef, Renderer2 } from '@angular/core';

import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  constructor(private router: Router, private el: ElementRef, private renderer: Renderer2) {
    this.setHeight('100%');
  }

  irAInicio() {
    this.router.navigate(['inicio']);
    this.setHeight('auto');
  }

  registarse() {
    this.router.navigate(['registro']);
    this.setHeight('auto');
  }

  volver() {
    this.router.navigate(['']);
  }

  private setHeight(value: string) {
    const htmlElement = this.el.nativeElement.ownerDocument.documentElement;
    this.renderer.setStyle(htmlElement, 'height', value);
  }
}  

