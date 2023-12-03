
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
      image: 'https://www.mundodeportivo.com/urbantecno/hero/2023/03/todos-los-satelites-y-rovers-que-la-nasa-ha-mandado-al-espacio.jpg?width=768&aspect_ratio=16:9&format=nowebp',
      title: 'Increíble descubrimiento en la investigación espacial',
      description: 'Los científicos han anunciado un descubrimiento asombroso en la exploración espacial, revelando nuevos detalles sobre el universo.'
    },
    {
      image: 'https://res.cloudinary.com/dkkd45ayz/image/upload/f_auto,q_auto,dpr_auto/w_600,h_343,c_scale/episerver/06a5df51-01d1-44c8-a25f-69f1977ef8f5/a-revolutionary-technology.jpg',
      title: 'Nueva tecnología revolucionaria cambia la forma en que vivimos',
      description: 'Una innovadora tecnología ha llegado al mercado, prometiendo transformar la forma en que interactuamos con la tecnología en nuestra vida diaria.'
    },
    {
      image: 'https://suportamed.com/wp-content/uploads/2021/03/enfermedades-cronicas-imagen-destacada.jpg',
      title: 'Tratamiento prometedor contra enfermedades crónicas',
      description: 'Nuevo tratamiento médico ha demostrado ser prometedor en el combate contra enfermedades crónicas, ofreciendo esperanza a millones de personas.'
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

