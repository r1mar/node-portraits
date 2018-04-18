import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class MatImageLoaderService {

  constructor(private http: HttpClient) { }

  public createFile(file: File, apiEndPoint: string): Observable<any> {
    const formData: FormData = new FormData();
    const headers = new HttpHeaders();

    formData.append('uploadFile', file, file.name);

    // No need to include Content-Type in Angular 4 
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return this.http.post(`${apiEndPoint}`, formData, { headers: headers });

  }

  public deleteFile(id: number, apiEndPoint: string) :Observable<any> {
    return this.http.delete(`${apiEndPoint}/${id}`);
  }

}
