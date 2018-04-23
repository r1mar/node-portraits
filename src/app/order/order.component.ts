import { Component, OnInit, ViewChild } from '@angular/core';
import { MatImageLoaderComponent } from './../image-loader/image-loader.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @ViewChild(MatImageLoaderComponent)
  imageLoader: MatImageLoaderComponent;

  constructor() { }

  ngOnInit() {
    if(this.imageLoader.isUploadCompleted) {
      
    }
  }

}
