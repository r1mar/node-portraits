import { Component, OnInit } from '@angular/core';
import { IMAGES } from './images';
import { PHONE_IMAGES } from './phone-images';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  mediaZero = '(min-width: 1px)';
  mediaXs = '(min-width: 250px)';
  mediaSm = '(min-width: 576px)';

  images = IMAGES;
  phoneImages = PHONE_IMAGES;

  ngOnInit() {
  }
}
