import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FileMetadata } from './file-metadata';
import { MatImageLoaderService } from './image-loader.service'; 
import { Observable } from 'rxjs/Observable';
//import { EventEmitter } from 'protractor';

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

  public getFiles() : FileMetadata[] {
    return this.uploadingFiles;
  }

  public get isUploadCompleted(): boolean {
    let pending = this.uploadingFiles.filter(function(entry:FileMetadata){
      return entry.subscription || entry.subscription != null;
    });

    return !pending || pending.length == 0;
  } 

  public fileChanged(event) {
    let fileList: FileList = event.target.files;

    if (fileList.length > 0) {
      const file: File = fileList[fileList.length - 1];
      this.pushNewFile(file);
      const fileMetadata = this.uploadingFiles.find(function (value: FileMetadata) {
        return value.description === file.name
          && !value.id;
      });

      let observable = this.imageLoaderService.createFile(file, this.apiEndPoint);

      fileMetadata.subscription = observable.subscribe(
          data => {
            event.target.value = '';

            fileMetadata.id = data.id;
            fileMetadata.dataUrl = this.apiEndPoint + '/' + data.id;
            delete fileMetadata.subscription;
          },
          error => {
            console.log(error);
            event.target.value = '';
            delete fileMetadata.subscription;
          }
        );
    }
  }

  public deleteFile(id: number) {
    let oDeleted = this.uploadingFiles.find(function(value: FileMetadata, index: number, obj: FileMetadata[] ) {
      return value.id === id;
    });

    if (oDeleted.subscription) {
      //Upload of file is not finished
      oDeleted.subscription.unsubscribe();
      this.uploadingFiles.splice(this.uploadingFiles.indexOf(oDeleted), 1);
    } else {
      this.imageLoaderService.deleteFile(id, this.apiEndPoint).subscribe(
        success => {
  
          this.uploadingFiles.splice(this.uploadingFiles.indexOf(oDeleted), 1);
        },
        error => console.log(error));
    }
  }

  private pushNewFile(file: File) {
    let fileMeta: FileMetadata = {};

    fileMeta.description = file.name;

      this.uploadingFiles.push(fileMeta);
  }

}
