import { Component, Input, OnInit } from '@angular/core';

import { FileMetadata } from './file-metadata';
import { MatImageLoaderService } from './image-loader.service'; 

@Component({
  selector: 'mat-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.css']
})
export class MatImageLoaderComponent implements OnInit {

  @Input() public apiEndPoint: string
  uploadingFiles: FileMetadata[] = [];

  constructor(private imageLoaderService: MatImageLoaderService) {

  }

  ngOnInit() {
  }

  public fileChanged(event) {
    let fileList: FileList = event.target.files;

    if (fileList.length > 0) {
      let file: File = fileList[fileList.length - 1];
      //this.pushNewFile(file);
      this.imageLoaderService.uploadFile(file, this.apiEndPoint)
        .subscribe(
        data => {
          /*this.uploadingFiles.find(function (value: FileMetadata) {
            return value.description === file.name;
          }).id = data["id"];*/
        },
        error => console.log(error)
        );
    }
  }

  private pushNewFile(file: File) {
    let fileMeta: FileMetadata = {};
    let myReader: FileReader = new FileReader();
    let that: MatImageLoaderComponent = this;

    fileMeta.description = file.name;

    myReader.onloadend = function (e) {
      // you can perform an action with readed data here
      fileMeta.dataUrl = myReader.result
      that.uploadingFiles.push(fileMeta);
    }

    myReader.readAsDataURL(file);

  }

}
