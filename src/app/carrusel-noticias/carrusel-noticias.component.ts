
import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel-noticias',
  templateUrl: './carrusel-noticias.component.html',
  styleUrls: ['./carrusel-noticias.component.css']
})
export class CarruselNoticiasComponent {
  currentSlide = 0;

  newsItems = [
    {
      image: 'https://i.etsystatic.com/31956167/r/il/4c04b6/4029052135/il_fullxfull.4029052135_chk7.jpg',
      title: 'Lego se une en la investigación espacial',
      description: 'Lego presenta su nueva colección espacial con naves innovadoras y astronautas detallados para explorar el cosmos infinito...'
    },
    {
      image: 'https://i.ytimg.com/vi/AcXjYTtNMJY/maxresdefault.jpg',
      title: 'Hecho histórico en la ingeniería de Lego',
      description: 'Increíble récord: Construyen la torre de Lego más alta del mundo, alcanzando alturas asombrosas y capturando la atención global...'
    },
    {
      image: 'https://www.brickfanatics.com/wp-content/uploads/LEGO-Star-Wars-75170-The-Phantom-featured.jpg',
      title: 'Nuevo set lego en colaboracion con Star Wars',
      description: 'Lego anuncia colaboración con STAR WARS, lanzando sets exclusivos que traen a la vida escenas icónicas...'
    }
  ];

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.newsItems.length) % this.newsItems.length;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.newsItems.length;
  }

  getCurrentNews() {
    return this.newsItems[this.currentSlide];
  }
}

