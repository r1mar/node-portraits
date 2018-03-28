import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { FileMetadata } from './file-metadata';

@Component({
  selector: 'mat-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.css']
})
export class MatImageLoaderComponent implements OnInit {

  @Input() public apiEndPoint: string
  uploadingFiles: FileMetadata[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }

  public fileChanged(event) {
    let fileList: FileList = event.target.files;

    if (fileList.length > 0) {
      let file: File = fileList[fileList.length - 1];
      this.pushNewFile(file);
      this.uploadNextFile(file)
        .subscribe(
        data => {
          this.uploadingFiles.find(function (value: FileMetadata) {
            return value.description === file.name;
          }).id = data["id"];
        },
        error => console.log(error)
        );
    }
  }

  private uploadNextFile(file: File): Observable<object> {
    let formData: FormData = new FormData();

    formData.append('uploadFile', file, file.name);

    let headers = new HttpHeaders();
    // No need to include Content-Type in Angular 4 
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return this.http.post(`${this.apiEndPoint}`, formData, { headers: headers });
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    return res.json();
  }

  private handleError(error: any) {
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
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
