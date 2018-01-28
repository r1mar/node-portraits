import { Component, OnInit } from '@angular/core';
import { Style } from './style.model';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  image: Style;

  pencil: Style;
  coloredPencil: Style;
  pastel: Style;

  constructor() {
    this.image = this.pencil = {
      src: 'images/Bleistiftportraitx640.jpg',
      alt: 'Bleistiftporträt vom Foto',
      header: 'Bleistift',
      body: 'Ein Bleistiftporträt wirkt durch tolle hell/dunkel Kontraste sehr zeitlos, edel und elegant. Durch die verschiedenen Härtegrade der Minen(Grautöne) kann man die glatte Haut von Menschen und auch jedes einzelne Tierhaar sehr gut auf das Papier bringen.'
    };

    this.coloredPencil = {
      src: 'images/Buntstiftportraitx640.jpg',
      alt: 'Buntstiftporträt vom Foto',
      header: 'Buntstift',
      body: 'Bei Buntstiftzeichnungen arbeitet man meistens in Schichten. Von hellen Farben zu den Dunkleren. Durch diese kräftige Farbmischung sehen die Bilder, vor allem Tierporträts sehr lebensecht aus. Man kommt der Vorlage erstaunlich nahe.'
    };

    this.pastel = {
      src: 'images/Pastelportraitx640.jpg',
      alt: 'Pastelporträt vom Foto',
      header: 'Pastell',
      body: 'Pastell-Malerei ist eine wunderbare Mal-Technik um Menschen und Tierporträts anzugehen. Hierbei werden spezielle Kreiden und Pastellstifte verwendet. Man zeichnet mit Kreiden und hebt anschließend die Details mit Pastellstiften hervor. Sehr farbintensiv und realistisch. Sie zeichnet sich durch eine gewisse Lebendigkeit und Leuchtkraft aus.'
    };
  }

  ngOnInit() {
  }

  public selectPencil() {
    this.image = this.pencil;
  }

  public selectColoredPencil() {
    this.image = this.coloredPencil;
  }

  public selectPastel() {
    this.image = this.pastel;
  }

}
