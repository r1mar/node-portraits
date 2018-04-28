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
  selectedId: number;

  constructor(private orderService: OrderService) { 
    
  }

  ngOnInit() {
    this.orderService.queryPortraitKinds().subscribe(data => {
      this.portraitKinds = data;
      this.selectedId = this.portraitKinds[0].id;
    }, error => {
      console.log(error);
    });
  }

  private getPrice(portraitKindId:number): number {
    var portraitKind = this.portraitKinds.find(f=>{ return f.id === portraitKindId });

    return portraitKind.price;
  }

}
