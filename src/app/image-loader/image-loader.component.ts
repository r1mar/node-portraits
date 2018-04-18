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
      this.pushNewFile(file);
      this.imageLoaderService.createFile(file, this.apiEndPoint)
        .subscribe(
          data => {
            const fileMetadata = this.uploadingFiles.find(function (value: FileMetadata) {
              return value.description === file.name
                && !value.id;
            });

            event.target.value = '';

            fileMetadata.id = data.id;
            fileMetadata.dataUrl = this.apiEndPoint + '/' + data.id;
          },
          error => {
            console.log(error);
            event.target.value = '';
          }
        );
    }
  }

  public deleteFile(id: number) {
    this.imageLoaderService.deleteFile(id, this.apiEndPoint).subscribe(
      success => {
        let oDeleted = this.uploadingFiles.find(function(value: FileMetadata, index: number, obj: FileMetadata[] ) {
          return value.id === id;
        });

        this.uploadingFiles.splice(this.uploadingFiles.indexOf(oDeleted), 1);
      },
      error => console.log(error));
  }

  private pushNewFile(file: File) {
    let fileMeta: FileMetadata = {};
    //let myReader: FileReader = new FileReader();
    //let that: MatImageLoaderComponent = this;

    fileMeta.description = file.name;

    //myReader.onloadend = function (e) {
      // you can perform an action with readed data here
     // fileMeta.dataUrl = myReader.result
      this.uploadingFiles.push(fileMeta);
    //}

    //myReader.readAsDataURL(file);

  }

}
