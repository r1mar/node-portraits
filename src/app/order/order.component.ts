import { Component, OnInit, ViewChild } from '@angular/core';
import { MatImageLoaderComponent } from './../image-loader/image-loader.component';
import { OrderService } from './order.service';
import { PortraitKind } from './portrait-kind';
import { PortraitSize } from './portrait-size';
import { CountSubject } from './count-subject';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @ViewChild(MatImageLoaderComponent)
  imageLoader: MatImageLoaderComponent;

  portraitKinds: Array<PortraitKind>;
  selectedPortraitKindName: string;

  portraitSizes: Array<PortraitSize>;
  selectedPortraitSizeName: string;

  countSubjects: Array<CountSubject>;
  selectedCountSubjectCount: number;

  constructor(private orderService: OrderService) { 
    
  }

  ngOnInit() {
    this.orderService.queryPortraitKinds().subscribe(data => {
      this.portraitKinds = data;
      this.selectedPortraitKindName = this.portraitKinds[0].name;
    }, error => {
      console.log(error);
    });

    this.orderService.queryPortraitSizes().subscribe(data => {
      this.portraitSizes = data;
      this.selectedPortraitSizeName = this.portraitSizes.find(size => size.name === 'A4').name;
    }, error => {
      console.log(error);
    });

    this.orderService.queryCountSubjects().subscribe(data => {
      this.countSubjects = data;
      this.selectedCountSubjectCount = 1;
    }, error => {
      console.log(error);
    });
  }

  private getPrice(portraitKindName?: string,
                   portraitSizeName?: string,
                   countSubjectCount?: number): string {
    let result: number = 0;

    if(portraitKindName) {
      const portraitKind = this.portraitKinds.find(f=> f.name === portraitKindName);

      if(portraitKind && portraitKind.price) {
        result += portraitKind.price;
      }
    }

    if(portraitSizeName) {
      const portraitSize = this.portraitSizes.find(f=> f.name == portraitSizeName);

      if(portraitSize && portraitSize.price) {
        result += portraitSize.price;
      }
    }

    if(countSubjectCount) {
      const countSubject = this.countSubjects.find(f=> f.count === countSubjectCount);

      if(countSubject && countSubject.price) {
        result += countSubject.price;
      }
    }

    return result.toFixed(2);
  }

  private getMin(portraitSizeName?: string): number {
    const portraitSize = this.portraitSizes.find(f=> f.name == portraitSizeName);

    return portraitSize.min_subjects;
  }

  private getMax(portraitSizeName?: string): number {
    const portraitSize = this.portraitSizes.find(f=> f.name == portraitSizeName);

    return portraitSize.max_subjects;
  }

}
