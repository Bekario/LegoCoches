import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel-noticias',
  templateUrl: './carrusel-noticias.component.html',
  styleUrls: ['./carrusel-noticias.component.css']
})
export class CarruselNoticiasComponent {
  currentSlideIndex = 0;
  images = [
    'https://www.ikea.com/es/es/images/products/bygglek-caja-201-piezas-lego-r-colores-variados__0915518_pe784785_s5.jpg',
    'https://www.lego.com/cdn/cs/set/assets/bltd8807580a3e088cc/10270_alt3.jpg',
    'https://www.lego.com/cdn/cs/set/assets/bltc490cf3d5c284e1a/21325_alt3.jpg?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1'
  ];

  showNext() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
  }

  showPrevious() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.images.length) % this.images.length;
  }
}