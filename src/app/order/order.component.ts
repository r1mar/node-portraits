import { Component, OnInit, ViewChild } from '@angular/core';
import { MatImageLoaderComponent } from './../image-loader/image-loader.component';
import { OrderService } from './order.service';
import { PortraitKind } from './portrait-kind';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @ViewChild(MatImageLoaderComponent)
  imageLoader: MatImageLoaderComponent;

  portraitKinds: Array<PortraitKind>;
  selectedKind: PortraitKind;

  constructor(private orderService: OrderService) { 
    
  }

  ngOnInit() {
    this.orderService.queryPortraitKinds().subscribe(data => {
      this.portraitKinds = data;
    }, error => {
      console.log(error);
    });
  }

}
