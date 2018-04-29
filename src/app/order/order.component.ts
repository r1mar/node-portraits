import { Component, OnInit, ViewChild } from '@angular/core';
import { MatImageLoaderComponent } from './../image-loader/image-loader.component';
import { OrderService } from './order.service';
import { PortraitKind } from './portrait-kind';
import { PortraitSize } from './portrait-size';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @ViewChild(MatImageLoaderComponent)
  imageLoader: MatImageLoaderComponent;

  portraitKinds: Array<PortraitKind>;
  selectedPortraitKindId: number;

  portraitSizes: Array<PortraitSize>;
  selectedPortraitSizeId: number;

  constructor(private orderService: OrderService) { 
    
  }

  ngOnInit() {
    this.orderService.queryPortraitKinds().subscribe(data => {
      this.portraitKinds = data;
      this.selectedPortraitKindId = this.portraitKinds[0].id;
    }, error => {
      console.log(error);
    });

    this.orderService.queryPortraitSizes().subscribe(data => {
      this.portraitSizes = data;
      this.selectedPortraitSizeId = this.portraitSizes.find(size => size.name === 'A4').id;
    }, error => {
      console.log(error);
    });
  }

  private getPrice(portraitKindId?: number,
                   portraitSizeId?: number): string {
    let result: number = 0;

    if(portraitKindId) {
      const portraitKind = this.portraitKinds.find(f=> f.id === portraitKindId);

      if(portraitKind && portraitKind.price) {
        result += portraitKind.price;
      }
    }

    if(portraitSizeId) {
      const portraitSize = this.portraitSizes.find(f=> f.id == portraitSizeId);

      if(portraitSize && portraitSize.price) {
        result += portraitSize.price;
      }
    }

    return result.toFixed(2);
  }

}
