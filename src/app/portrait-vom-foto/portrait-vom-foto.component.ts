import { Component, OnInit } from '@angular/core';

import { IMAGES } from '../images';
import { PHONE_IMAGES } from '../phone-images';

@Component({
  selector: 'app-portrait-vom-foto',
  templateUrl: './portrait-vom-foto.component.html',
  styleUrls: ['./portrait-vom-foto.component.css']
})
export class PortraitVomFotoComponent implements OnInit {
  mediaZero = '(min-width: 1px)';
  mediaXs = '(min-width: 250px)';
  mediaSm = '(min-width: 576px)';

  images = IMAGES;
  phoneImages = PHONE_IMAGES;

  constructor() { }

  ngOnInit() {
  }

}
