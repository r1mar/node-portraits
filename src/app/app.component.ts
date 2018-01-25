import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  images = [
    {
      src: 'images/Pastelportraitx150.jpg',
      alt: 'Pastelporträt vom Foto'
    },
    {
      src: 'images/examples/Bleistiftportrait3x150.jpg',
      alt: 'Bleistiftporträt'
    },
    {
      src: 'images/examples/Pastelportrait1x150.jpg',
      alt: 'Pastelporträt'
    },
    {
      src: 'images/examples/Bleistiftportrait6x150.jpg',
      alt: 'Bleistiftporträt'
    },
    {
      src: 'images/examples/Bleistiftportrait1x150.jpg',
      alt: 'Bleistiftporträt' 
    },
    {
      src: 'images/examples/Pastelportrait4x150.jpg',
      alt: 'Pastelporträt' 
    },
    {
      src: 'images/examples/Buntstiftportrait2x150.jpg',
      alt: 'Buntstiftporträt' 
    },
    {
      src: 'images/examples/Pastelportrait2x150.jpg',
      alt: 'Pastelporträt'
    },
    {
      src: 'images/examples/Buntstiftportrait1x150.jpg',
      alt: 'Buntstiftporträt'
    },
    {
      src: 'images/examples/Bleistiftportrait5x150.jpg',
      alt: 'Bleistiftporträt'
    },
    {
      src: 'images/examples/Bleistiftportrait4x150.jpg',
      alt: 'Bleistiftporträt'
    },
    {
      src: 'images/Buntstiftportraitx150.jpg',
      alt: 'Buntstiftporträt vom Foto'
    } ];
}
